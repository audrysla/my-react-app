import React, { useRef } from "react";
import { NavLink, Outlet } from 'react-router-dom';

// 1. 네비게이션 아이템 타입 정의
interface NavItem {
  path: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "click" },
  { path: "/ExHover", label: "hover" },
  { path: "/ExUseState", label: "useState" },
  { path: "/ExUseEffect", label: "useEffect" },
  { path: "/ExUseRef", label: "useRef" },
  { path: "/ExContext", label: "Context" },
];

const HomeLayout = () => {
  const navRef = useRef<HTMLElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 클릭한 a 태그(NavLink)를 가로 기준 중앙(inline: "center")으로 스크롤 이동
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center", // 가로 중앙 정렬
    });
  };

  return (
    <div className="subpage-layout">
      <aside className="sidebar">
        <nav ref={navRef}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path} // 고유한 key 값 필수 (경로 사용)
              to={item.path}
              onClick={handleClick}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="subpage-content">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;