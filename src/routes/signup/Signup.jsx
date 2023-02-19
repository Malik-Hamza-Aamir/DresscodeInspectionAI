import "./signup.css";
import { ReactComponent as Pic } from "../../assets/signuppic.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="bg-signup-container">

      <div className="signup-item card-picture">
          <Pic className="left" />
        </div>

        <div className="signup-item card-signup">
          <form class="signup">
            <h2>SIGNUP</h2>
            {/* <p >Put All Your Information Here</p> */}
            <div class="signup__field">
              <i class="signup__icon fas fa-user"></i>
              <input
                type="text"
                class="signup__input"
                placeholder="User name / Email"
              />
            </div>
            <div class="signup__field">
              <i class="signup__icon fas fa-lock"></i>
              <input
                type="password"
                class="signup__input"
                placeholder="Password"
              />
            </div>
            <div class="signup__field">
              <i class="signup__icon fas fa-lock"></i>
              <input
                type="password"
                class="signup__input"
                placeholder="Confirm Password"
              />
            </div>
            <Link to='/getstarted'>
            <button class="button signup__submit">
              <span class="button__text">Signup Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
            </Link>
          </form>
        </div>

        
      </div>
    </>
  );
};

export default Signup;
