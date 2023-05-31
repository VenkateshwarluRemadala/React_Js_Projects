import React from 'react'
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom'
import Login from "./Login"
import Logout from "./Logout"
import Home from './Home'
export default function Navbar() {
    return (
        <div>
            <Router>
            <ul>
  <li><Link to={"./"}>Home</Link></li>
  <li><Link to={"./Login"}>Login</Link></li>
  <li><Link to={"./Logout"}>Logout</Link></li>
  
</ul>
<Switch>
    <Route path="/Login">
       <Login/> 
    </Route>
    <Route path="/Logout">
       <Logout/> 
    </Route>
    <Route path="/">
       <Home/> 
    </Route>
</Switch>
            </Router>
            
        </div>
    )
}
