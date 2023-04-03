import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content gap-6">
      <span className="footer-title m-0">Follow my Socials!</span>
      <div className="flex flex-row gap-6">
        <Link to="https://github.com/dagbay" target="blank">
          <FaGithub size={30} />
        </Link>
        <Link to="https://www.instagram.com/znivyy/" target="blank">
          <FaInstagram size={30} />
        </Link>
        <Link to="https://www.linkedin.com/in/dagbay/" target="blank">
          <FaLinkedin size={30} />
        </Link>
      </div>
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by Daniel
          Agbay
        </p>
      </div>
    </footer>
  );
}
export default Footer;
