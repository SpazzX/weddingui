import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/content/Home";
import Guests from "./components/content/Guests";
import Contact from "./components/content/Contact";
import './components/common/Common.css';
class App extends Component {
render()
{
return (
  <HashRouter>
    <div>
      <h1>Simple SPA</h1>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/guests">Guests</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/guests" component={Guests}/>
          <Route path="/contact" component={Contact}/>
      </div>
    </div>
  </HashRouter>
);
}
}
export default App;
