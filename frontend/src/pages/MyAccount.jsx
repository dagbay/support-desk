import { Helmet } from "react-helmet";

function MyAccount() {
  return (
    <>
      <Helmet>
        <title>Ticketr - My Account</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-primary font-bold text-5xl mb-5">My Account</h1>
      </div>
    </>
  );
}
export default MyAccount;
