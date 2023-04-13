import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import { Helmet } from "react-helmet";

import BackButton from "../components/BackButton";
import Loading from "../components/Loading";

import TicketItem from "../components/TicketItem";

function MyTickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Ticketr - My Tickets</title>
      </Helmet>

      <div className="mb-10">
        <BackButton url="/" />
      </div>

      <div className="text-center">
        <h1 className="text-primary font-bold text-5xl mb-5 w-fit mx-auto">
          <p>Tickets Submitted</p>
          <div className="divider"></div>
        </h1>
      </div>

      <article>
        {tickets.length ? (
          <div className="overflow-x-full">
            <table className="table table-zebra w-full mx-auto text-center">
              <thead>
                <tr>
                  <th className="sm:w-1/4">Date</th>
                  <th className="sm:w-1/4">Product</th>
                  <th className="sm:w-1/4">Status</th>
                  <th className="sm:w-1/4"></th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <TicketItem ticket={ticket} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center text-lg font-bold">
            No Tickets Submitted
          </h1>
        )}
      </article>
    </>
  );
}
export default MyTickets;
