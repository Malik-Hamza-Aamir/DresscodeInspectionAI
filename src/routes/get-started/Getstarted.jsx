import { Link } from "react-router-dom";
import "./getstarted.css";

const Getstarted = () => {
    return(
        <>
        <div className="stream-container">
            <Link to='/stream'>
                <button className="stream-btn">Start Stream</button>
            </Link>
        </div>
        </>
    );
};

export default Getstarted;