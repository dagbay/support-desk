import { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Header() {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("theme") === "light" ? true : false
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const onToggle = () => {
    const newTheme = lightMode ? "night" : "light";
    setLightMode(!lightMode);
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme);
    htmlElement.style.transition = "background-color 0.5s ease";
  }, [theme]);

  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl my-5 gap-3 font-bold"
          >
            <MdOutlineSupportAgent />
            Ticketr
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-2xl gap-3">
            <div className="flex flex-row gap-3 items-center">
              <FiSun />
              <input
                type="checkbox"
                className="toggle toggle-md"
                checked={!lightMode}
                onChange={onToggle}
              />
              <FaMoon />
            </div>
            <div className="divider divider-horizontal" />
            {user ? (
              <>
                <li>
                  <Link to="/my-account">
                    <RiAccountCircleFill />
                    Account
                  </Link>
                </li>
                <li>
                  <button onClick={onLogout}>
                    <FaSignOutAlt />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <FaSignInAlt />
                    <p className="mb-1">Login</p>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <FaUser />
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <hr className="mx-5" />
    </>
  );
}
export default Header;
