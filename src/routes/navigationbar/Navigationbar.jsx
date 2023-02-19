import { Link, Outlet } from "react-router-dom";
import "./navigationbar.css";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigationbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="navlinks-container">

          <Link className="navlink" to="/">
            Home
          </Link>

          <Link className="navlink" to="/getstarted">
            Get Started
          </Link>

          <Link className="navlink" to="/stream">
            Stream
          </Link>

          <Link className="navlink-btn" to="/signup">
            Signup
          </Link>

          <Link className="navlink-btn" to="/login">
            Login
          </Link>

          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigationbar;
