interface UserProfileProps {
  name: string;
  age: number;
  job: string;
  skills: string;
  email: string;
  tel?: string;
  notes: string;
}

export function UserProfile({
  name,
  age,
  job,
  skills,
  email,
  tel,
  notes
}: UserProfileProps) {
  return (
    <div className="user-card">
      <p><em>이름</em> {name}</p>
      <p><em>나이</em> {age}세</p>      
      <p><em>직업</em> {job}</p>
      <p><em>e-mail</em> {email}</p>
      <p><em>Tel.</em> {tel}</p>
      <p><em>스킬</em> {skills}</p>
      <p><em>기타</em> {notes}</p>      
    </div>
  );
}