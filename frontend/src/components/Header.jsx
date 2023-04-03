import { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [lightMode, setLightMode] = useState(true);
  const [theme, setTheme] = useState("night");

  const onToggle = () => {
    setLightMode(!lightMode);
    setTheme(lightMode ? "light" : "night");
  };

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl my-5 gap-3 font-bold"
          >
            <MdOutlineSupportAgent />
            Support Desk
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-2xl gap-3">
            <div className="flex flex-row gap-3 items-center">
              <FiSun />
              <input
                type="checkbox"
                className="toggle toggle-md"
                checked={lightMode}
                onChange={onToggle}
              />
              <FaMoon />
            </div>
            <div className="divider divider-horizontal" />
            <li>
              {user ? (
                <Link to="/login">
                  <RiAccountCircleFill />
                  Account
                </Link>
              ) : (
                <Link to="/login">
                  <FaSignInAlt />
                  Login
                </Link>
              )}
            </li>
            <li>
              {user ? (
                <Link to="/logout">
                  <FaSignOutAlt />
                  Logout
                </Link>
              ) : (
                <Link to="/register">
                  <FaUser />
                  Register
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-5" />
    </>
  );
}
export default Header;
