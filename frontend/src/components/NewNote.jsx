import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../features/notes/noteSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function NewNote({ isLoading }) {
  const { user } = useSelector((state) => state.auth);
  const { isError, isSuccess, message } = useSelector((state) => state.notes);

  const { name, email } = user;

  const dispatch = useDispatch();
  const params = useParams();

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
    }

    dispatch(addNote({ noteData: text, ticketId: params.ticketId }));
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action" style={{ margin: "0" }}>
            <label htmlFor="my-modal" className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col items-center">
            <div className="w-80">
              <div className="text-center">
                <h1 className="text-primary font-bold text-2xl">New Note</h1>
              </div>
              <div className="divider"></div>
              <div className="mb-4 w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  className="input input-bordered w-full max-w-xs"
                  disabled
                />
              </div>

              <div className="mb-4 w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  className="input input-bordered w-full max-w-xs"
                  disabled
                />
              </div>

              <div className="mb-4 w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  id="text"
                  name="text"
                  value={text}
                  onChange={onChange}
                  placeholder="Type here..."
                  className="textarea textarea-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="modal-action">
                <button className="mx-auto" type="submit">
                  <label htmlFor="my-modal" className="btn btn-success">
                    Submit
                  </label>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default NewNote;
