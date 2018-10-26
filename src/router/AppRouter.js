import React, { Component } from "react";
import {
  Route,
  NavLink as RRNavLink ,
  HashRouter
} from "react-router-dom";
import Home from "../components/content/Home";
import Guests from "../components/content/Guests";
import GuestAdd from "../components/common/AddGuest";
import Contact from "../components/content/Contact";
import { Nav, NavItem, NavLink, Navbar, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap';
import '../components/common/Common.css';

class AppRouter extends Component {
constructor(props) {
  super(props);

  this.toggleNavbar = this.toggleNavbar.bind(this);
  this.state = {
    collapsed: true
  };
}

toggleNavbar() {
  this.setState({
    collapsed: !this.state.collapsed
  });
}

render() {
    return (
      <HashRouter>
        <div>
          <Navbar color="faded" light>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <NavbarBrand className="ml-auto">MO and BO</NavbarBrand>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                    <NavItem onClick={this.toggleNavbar}>
                      <NavLink exact to="/home" tag={RRNavLink}>Home</NavLink>
                    </NavItem>
                    <NavItem onClick={this.toggleNavbar}>
                      <NavLink exact to="/guests" tag={RRNavLink}>Guests</NavLink>
                    </NavItem>
                    <NavItem onClick={this.toggleNavbar}>
                      <NavLink exact to="/contact" tag={RRNavLink}>Contact</NavLink>
                    </NavItem>
                    <NavItem onClick={this.toggleNavbar}>
                      <NavLink exact to="/addg" tag={RRNavLink}>Add Guest</NavLink>
                    </NavItem>
                </Nav>
              </Collapse>
          </Navbar>
          <div className="content">
              <Route path="/home" component={Home}></Route>
              <Route path="/guests" component={Guests}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/addg" component={GuestAdd}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default AppRouter;
