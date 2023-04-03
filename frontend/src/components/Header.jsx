import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
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
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-5" />
    </>
  );
}
export default Header;
