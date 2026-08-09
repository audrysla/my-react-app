import { NavLink, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="subpage-layout">
      <aside className="sidebar">
        <nav>
          <NavLink to="/">click</NavLink>
          <NavLink to="/ExHover">hover</NavLink>
          <NavLink to="/ExUseState">useState</NavLink>
          <NavLink to="/ExUseEffect">useEffect</NavLink>
          <NavLink to="/ExUseRef">useRef</NavLink>
          <NavLink to="/ExContext">Context</NavLink>
        </nav>
      </aside>

      <section className="subpage-content">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;