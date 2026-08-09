import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <h1><Link to="/">{title}</Link></h1>
      <nav>
        <Link to="/about">소개</Link>
      </nav>
    </header>
  );
}