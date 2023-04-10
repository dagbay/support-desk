import { Helmet } from "react-helmet";

function ForgotPassword() {
  return (
    <>
      <Helmet>
        <title>Ticketr - Forgot Password</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-primary font-bold text-5xl mb-5">
          Forgot Password
        </h1>
      </div>
    </>
  );
}
export default ForgotPassword;
