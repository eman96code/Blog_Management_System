import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import "../navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <Logo />
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active_link" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blogs"
              className={({ isActive }) => (isActive ? "active_link" : "link")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) => (isActive ? "active_link" : "link")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? "active_link" : "link")}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              Login
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-input border-border rounded border p-2"
          />
          <button className="bg-primary text-primary-foreground rounded p-2">
            🔍
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
