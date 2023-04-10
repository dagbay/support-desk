import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";
import MyTickets from "./pages/MyTickets";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <div className="mx-5">
          <Header />
          <div className="my-56 mx-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-ticket" element={<PrivateRoute />}>
                <Route path="/new-ticket" element={<NewTicket />} />
              </Route>
              <Route path="/my-tickets" element={<PrivateRoute />}>
                <Route path="/my-tickets" element={<MyTickets />} />
              </Route>
              <Route path="/my-account" element={<PrivateRoute />}>
                <Route path="/my-account" element={<MyAccount />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
