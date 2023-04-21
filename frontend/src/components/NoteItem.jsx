import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className="card w-full bg-neutral text-neutral-content mt-5 shadow-md"
      style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0,0.7)" : "#fff",
        color: note.isStaff ? "#fff" : "#000",
      }}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <FaUser size={45} />
            <div>
              <h4 className="font-bold">
                {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}{" "}
              </h4>
              <p>{note.text}</p>
            </div>
          </div>
          <div>
            <div>{new Date(note.createdAt).toLocaleString("en-US")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NoteItem;
