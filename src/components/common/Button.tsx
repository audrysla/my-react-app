interface ButtonProps {
  children: React.ReactNode; // 버튼 안에 들어갈 텍스트 또는 태그
  onClick: () => void;       // 부모에서 넘겨받을 클릭 핸들러 함수
  type?: 'button' | 'submit';
}

export function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <>
      <button type={type} onClick={onClick} className="custom-button">
        {children}
      </button>
    </>
  );
}