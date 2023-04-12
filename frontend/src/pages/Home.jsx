import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function Home() {
  const { isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Ticketr - Home</title>
      </Helmet>
      <div className="my-52">
        <div className="text-center">
          <h1 className="text-primary font-bold text-5xl mb-5">
            What do you need help with?
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
      </div>
    </>
  );
}
export default Home;
