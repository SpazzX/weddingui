import React, { Component } from 'react';
import GuestList from '../common/GuestList';
import axios from 'axios';

class ListContainer extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      names: []
    };
  }

  componentDidMount() {
    var self = this;
    axios.get(`http://localhost:12345/api/guest`)
        .then((response) => {
          self.setState({ names: response.data });
        })
        .catch((error)=>{
          console.log(error);
        });
    }

  render()
  {
    return (
      <div>
      <ul>
        { this.state.names.map(person => <li key={person.personID}>{person.firstName} {person.lastName}</li>)}
      </ul>
      <GuestList />
      </div>
    )
  }

}

export default ListContainer;
