import { useState, useActionState, useOptimistic, useRef } from "react";
import { useFormStatus } from "react-dom";

interface ActionState {
  error?: string | null;
  success?: boolean;
  newComment?: string;
}

interface OptimisticComment {
  text: string;
  isSending: boolean;
}

// 1. 가상 서버 요청 함수
async function addCommentAction(
  _previousState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const comment = formData.get("comment");

  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (typeof comment !== "string" || comment.trim() === "") {
    return { error: "댓글 내용을 입력해주세요." };
  }

  return { success: true, newComment: comment };
}

// 2. [useFormStatus] 하위 버튼
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "등록 중..." : "댓글 등록"}
    </button>
  );
}

// 3. 메인 컴포넌트
interface CommentSectionProps {
  initialComments?: string[];
}

export default function CommentSection({
  initialComments = ["첫 번째 댓글입니다."],
}: CommentSectionProps) {
  // ★ 1) 실제 지속될 댓글 목록을 useState로 관리
  const [comments, setComments] = useState<string[]>(initialComments);
  const formRef = useRef<HTMLFormElement>(null);

  // ★ 2) useOptimistic의 기본값으로 useState의 comments 전달
  const [optimisticComments, addOptimisticComment] = useOptimistic<
    (string | OptimisticComment)[],
    string
  >(comments, (currentComments, newCommentText) => [
    ...currentComments,
    { text: newCommentText, isSending: true },
  ]);

  const [state, formAction] = useActionState<ActionState, FormData>(
    async (prevState, formData) => {
      const commentText = formData.get("comment");

      if (typeof commentText === "string" && commentText.trim() !== "") {
        // UI에 임시 추가 (반투명 상태)
        addOptimisticComment(commentText);
      }

      // 서버 응답 대기
      const result = await addCommentAction(prevState, formData);

      // ★ 3) 성공 시 실제 useState 상태를 업데이트 -> 댓글 지속 유지!
      if (result.success && result.newComment) {
        setComments((prev) => [...prev, result.newComment!]);
        formRef.current?.reset();
      }

      return result;
    },
    { error: null }
  );

  return (
    <div style={{ maxWidth: "400px", padding: "20px" }}>
      <h3>댓글 목록</h3>

      <ul>
        {optimisticComments.map((comment, index) => {
          const isObject = typeof comment === "object";
          const text = isObject ? comment.text : comment;
          const isSending = isObject ? comment.isSending : false;

          return (
            <li key={index} style={{ opacity: isSending ? 0.5 : 1 }}>
              {text} {isSending && <small>(전송 중...)</small>}
            </li>
          );
        })}
      </ul>

      <form ref={formRef} action={formAction}>
        <input
          type="text"
          name="comment"
          placeholder="댓글을 입력하세요..."
          required
        />
        <SubmitButton />
      </form>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}