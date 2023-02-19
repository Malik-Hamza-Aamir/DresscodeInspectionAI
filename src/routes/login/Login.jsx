import "./login.css";
import { ReactComponent as Pic } from "../../assets/loginleft.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-login-container">
        <div className="login-item card-picture">
          <Pic className="left" />
        </div>

        <div className="login-item card-login">
          <form class="login">
            <h2>LOGIN</h2>
            {/* <p >Put All Your Information Here</p> */}
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
              />
            </div>

            <Link to='/getstarted'>
            <button class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>

            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
