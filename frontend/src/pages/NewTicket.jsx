import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product: "iPhone",
    description: "",
  });

  const { product, description } = formData;
  const { name, email } = user;

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
      navigate("/my-tickets");
    }
  }, [dispatch, isError, isSuccess, message, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ product, description }));
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Ticketr - New Ticket</title>
      </Helmet>

      <div className="mb-10">
        <BackButton url="/" />
      </div>

      <div className="text-center">
        <h1 className="text-primary font-bold text-5xl mb-5">
          Create New Ticket
        </h1>
        <p>Please fill out the form below</p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col items-center mt-5">
        <div className="w-80">
          <div className="mb-4 w-full">
            <label className="label">
              <span className="label-text">Customer Name</span>
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
              <span className="label-text">Customer Email</span>
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
              <span className="label-text">Select a Product</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={onChange}
              id="product"
              name="product"
              value={product}
              required
            >
              <option disabled selected>
                Select a Product
              </option>
              <option>iPhone</option>
              <option>MacBook Pro</option>
              <option>iMac</option>
              <option>iPad</option>
            </select>
          </div>

          <div className="mb-4 w-full">
            <label className="label">
              <span className="label-text">Describe the issue</span>
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={onChange}
              placeholder="Type here..."
              className="textarea textarea-bordered w-full max-w-xs"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-outline btn-primary w-80">
          Submit Ticket
        </button>
      </form>
    </>
  );
}
export default NewTicket;
