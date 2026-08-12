import { useState } from 'react';

export default function Sub02() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-block',
        width: '280px',
      }}
    >
      <h2>hover 페이지</h2>

      {isHovered && <span>✨✨✨✨✨✨✨</span>}
      
    </div>
  );
}