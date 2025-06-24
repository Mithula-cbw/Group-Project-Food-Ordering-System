import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="p-4 bg-red-50">
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr className="my-4" />
      <Outlet />
    </div>
  );
}
