import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Ticketr - Page Not Found</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-primary font-bold text-7xl mb-5">404</h1>
      </div>
      <div className="text-center text-4xl mt-5">
        <p>The page you were looking isn't here.</p>
      </div>
    </>
  );
}
export default NotFound;
