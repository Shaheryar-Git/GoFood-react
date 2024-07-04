import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import Mainpage from "./Components/Mainpage";
import Error from "./Components/Error";


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Mainpage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
