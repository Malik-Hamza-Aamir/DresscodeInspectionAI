import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./livestream.css";

const Livestream = () => {

    let videoRef = useRef(null);

    //get access to webcam

    const getCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video:true
        })
        .then((stream) => {
            // attach the stream to video tag

            let video = videoRef.current;
            video.srcObject = stream;

            video.play();
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getCamera();
    },[videoRef])

    return(
        <>
            <div className="video-container">
                <div className="video-fcontainer stream-l">
                    <Link to='/getstarted'>
                        <button className="cam-btn">Stop Stream</button>
                    </Link>
                    <video  ref={videoRef}></video>
                </div>
                <div className="video-fcontainer pic-r">
                    
                </div>
            </div>
        </>
    );
};

export default Livestream;