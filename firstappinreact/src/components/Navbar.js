import React, { Component } from 'react'
import { BrowserRouter as Router ,Route, Link, Switch } from 'react-router-dom'
import  Home from './Home'
import About from './About'
import Contact from './Contact'
import News from './News'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'
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
</Switch>
</Router>
            </div>
        )
    }
}

export default Navbar

