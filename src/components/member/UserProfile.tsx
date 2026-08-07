interface UserProfileProps {
  name: string;
  age: number;
  job: string;
  email: string;
}

export function UserProfile({
  name,
  age,
  job,
  email
}: UserProfileProps) {
  return (
    <div className="user-card">
      <p>이름: {name}</p>
      <p>나이: {age}세</p>
      <p>직업: {job}</p>
      <p>이메일: {email}</p>
    </div>
  );
}