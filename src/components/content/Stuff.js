import React, { Component } from "react";
import GuestListContainer from '../containers/GuestListContainer';

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Guests</h2>
        <p>Here is the Guest List</p>
        <GuestListContainer />
      </div>
    );
  }
}

export default Stuff;
