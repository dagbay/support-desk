import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useState } from "react";

function Home() {
  const { user } = useSelector((state) => state.auth);

  const [name, setName] = useState(user.name);

  const getFirstName = () => {
    setName(user.name.split(" ")[0]);
    return name;
  };

  return (
    <>
      <Helmet>
        <title>Support Desk - Home</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-primary font-bold text-5xl mb-5">
          What do you need help with {getFirstName}?
        </h1>
        <p>Please choose from an option below</p>
        <div className="max-w-lg mx-auto mt-5">
          <div className="flex flex-col gap-3">
            <Link
              to="/new-ticket"
              className="btn btn-outline btn-primary gap-2"
            >
              <FaQuestionCircle />
              Create New Ticket
            </Link>
            <Link
              to="/my-tickets"
              className="btn btn-outline btn-secondary gap-2"
            >
              <FaTicketAlt />
              View My Tickets
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
