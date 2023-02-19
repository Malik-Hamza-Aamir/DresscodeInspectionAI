import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-box">
          <div>
            <h1 className="m-text">Artificial</h1>
            <h1 className="m-text">Intellegence</h1>
            <div className="para-box">
              <p className="m-text-p">Think outside the box</p>
              <p className="m-text-p">Real-time Dresscode Detection</p>
            </div>
          </div>

          <Link to="/getstarted">
          <button className="homepg-btn">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
