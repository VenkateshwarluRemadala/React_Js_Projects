import React, { Component } from 'react'
import { BrowserRouter as Router ,Route, Link, Switch } from 'react-router-dom'
import  Home from './Home'
import About from './About'
import Contact from './Contact'
import News from './News'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'
import Login from './Login'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <Router>
                <ul>
  
  <li> <Link to={"/Home"}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home</Link></li>
  <li> <Link to={"/News"}><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>News</Link></li>
  <li> <Link to={"/Contact"}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Contact</Link></li>
  <li> <Link to={"/About"}><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>About</Link></li>
  <li> <Link to={"/Login"}><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>Login</Link></li>
  
</ul>
<Switch>
    <Route path="/News">
        <News/>
    </Route>
    <Route path="/Contact">
        <Contact/>
    </Route>
    <Route path="/About">
        <About/>
    </Route>
    <Route path="/Home">
        <Home/>
    </Route>
    <Route path="/Login">
        <Login/>
    </Route>
</Switch>
</Router>
            </div>
        )
    }
}

export default Navbar

