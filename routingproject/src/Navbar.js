import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import Greetings from "./Greetings";

function Navbar() {
  return (
    <div>
        
        <Router>
            <ul>
                <li><Link to = {'/'}></Link></li>
                <li><Link to = {"/home"}>home</Link></li>
                <li><Link to = {"/hello"}>hello</Link></li>
                <li><Link to = {"/greet"}>greet</Link></li>
            </ul>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/home" element={<Home />}/>
            <Route  path="/hello" element={<Hello />} />
            <Route path="/greet" element={<Greetings/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default Navbar;
