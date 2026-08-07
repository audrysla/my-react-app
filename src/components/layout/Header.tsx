interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <a href="#home">홈</a> | <a href="#about">소개</a>
      </nav>
    </header>
  );
}