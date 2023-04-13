import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
  let status = "";

  switch (ticket.status) {
    case "New":
      status = "info";
      break;
    case "Open":
      status = "success";
      break;
    case "Closed":
      status = "error";
      break;
    default:
      break;
  }

  return (
    <tr>
      <td>{new Date(ticket.createdAt).toLocaleString("en-US")}</td>
      <td>{ticket.product}</td>
      <td>
        <div className={`badge badge-${status}`}>
          <p className="mx-3">{ticket.status}</p>
        </div>
      </td>
      <td>
        <Link
          to={`/ticket/${ticket._id}`}
          className="btn btn-ghost btn-outline"
        >
          <p className="mx-20">View</p>
        </Link>
      </td>
    </tr>
  );
}
export default TicketItem;
