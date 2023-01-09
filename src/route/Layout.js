import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
