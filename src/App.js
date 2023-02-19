import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigationbar from "./routes/navigationbar/Navigationbar";
import Getstarted from "./routes/get-started/Getstarted";
import Signup from "./routes/signup/Signup";
import Login from "./routes/login/Login";
import Livestream from "./routes/liveStream/Livestream";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigationbar /> } >
        <Route index element={ <Home /> } />
        <Route path='/getstarted' element={ <Getstarted /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path="/stream" element={ <Livestream /> } />
      </Route>
      
    </Routes>
  );
};

export default App;
