import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Loading from "../components/Loading";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess || user) {
      navigate("/");
    }
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Ticketr - Login</title>
      </Helmet>
      <div className="mt-32">
        <div className="section mx-auto w-22">
          <div className="flex items-center justify-center h-full text-primary font-bold text-7xl gap-5">
            <FaSignInAlt />
            <h1>Login</h1>
          </div>
          <div className="text-center text-4xl mt-5">
            <p>Please login to get support</p>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col items-center mt-8">
            <div className="w-80">
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-outline btn-primary w-80">
              Login
            </button>
          </form>
          <div className="flex justify-center items-center my-5 gap-5">
            <Link to="/forgot-password" className="btn btn-ghost">
              Forgot Password
            </Link>
            <Link to="/register" className="btn btn-ghost">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
