import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import { Helmet } from "react-helmet";

import BackButton from "../components/BackButton";
import Loading from "../components/Loading";

function Ticket() {
  const { ticket, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  );

  const navigate = useNavigate();
  const { ticketId } = useParams();
  const dispatch = useDispatch();
  let status = useRef("");

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    // eslint-disable-next-line
  }, [isError, message, ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed");
    navigate("/my-tickets");
  };

  switch (ticket.status) {
    case "New":
      status.current = "info";
      break;
    case "Open":
      status.current = "success";
      break;
    case "Closed":
      status.current = "error";
      break;
    default:
      break;
  }

  if (isError) {
    return (
      <div className="mt-32">
        <div className="section mx-auto w-22">
          <div className="flex flex-col items-center justify-center h-full text-center gap-6">
            <div className="text-primary font-bold text-5xl ">
              <h1>Something Went Wrong</h1>
            </div>
            <p>You don't have access to this</p>
          </div>
        </div>
      </div>
    );
  }

  console.log(status.current);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Ticketr - View Ticket</title>
      </Helmet>
      <div className="mb-10">
        <BackButton url="/my-tickets" />
      </div>

      <div className="section w-fit mx-auto">
        <div className="flex flex-col justify-center gap-3">
          <div>
            <h1 className="text-primary font-bold text-4xl items-start">
              Ticket ID: {ticket._id}
            </h1>
            <h3>
              Date Submitted:{" "}
              {new Date(ticket.createdAt).toLocaleString("en-US")}
            </h3>
          </div>
          <div className={`badge badge-${status.current}`}>
            <p>{ticket.status}</p>
          </div>
        </div>
        <div className="divider mt-3"></div>

        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body">
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="font-bold ">Product</h1>
                <p>{ticket.product}</p>
              </div>
              <div>
                <h1 className="font-bold ">Description of Issue</h1>
                <p>{ticket.description}</p>
              </div>
            </div>
          </div>
        </div>

        {ticket.status !== "Closed" && (
          <button
            type="button"
            className="btn btn-error btn-block mt-5"
            onClick={onTicketClose}
          >
            <p className="font-bold">Close Ticket</p>
          </button>
        )}
      </div>
    </>
  );
}
export default Ticket;
