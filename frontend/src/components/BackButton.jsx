import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link to={url}>
      <button className="btn btn-ghost btn-outline gap-2">
        <FaArrowCircleLeft /> Back
      </button>
    </Link>
  );
};

export default BackButton;
