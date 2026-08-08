import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link>
      </nav>
    </header>
  );
}