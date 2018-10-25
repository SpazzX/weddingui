import React, { Component } from "react";
import {
  Route,
  NavLink as RRNavLink ,
  HashRouter
} from "react-router-dom";
import Home from "./components/content/Home";
import Guests from "./components/content/Guests";
import GuestAdd from "./components/common/AddGuest";
import Contact from "./components/content/Contact";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import './components/common/Common.css';

class App extends Component {
render()
{
return (
  <HashRouter>
    <div>
      <Navbar color="light" light expand="md">
        <Nav navbar>
            <NavItem>
              <NavLink exact to="/" tag={RRNavLink}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/guests" tag={RRNavLink}>Guests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/contact" tag={RRNavLink}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/addg" tag={RRNavLink}>Add Guest</NavLink>
            </NavItem>
        </Nav>
        <NavbarBrand className="ml-auto" href="/">MO and BO</NavbarBrand>
      </Navbar>
      <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/guests" component={Guests}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/addg" component={GuestAdd}/>
      </div>
    </div>
  </HashRouter>
);
}
}
export default App;
