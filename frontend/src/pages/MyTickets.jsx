import { Helmet } from "react-helmet";

function MyTickets() {
  return (
    <>
      <Helmet>
        <title>Ticketr - My Tickets</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-primary font-bold text-5xl mb-5">My Tickets</h1>
      </div>
    </>
  );
}
export default MyTickets;
