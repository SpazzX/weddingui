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
          if (response.data.length) {
            self.setState({ names: response.data });
          } else {
            console.log('No data coming back');
          }
        })
        .catch((error)=>{
          console.log(error);
        });
    }

  render() {
    return (
      <div>
      <ul>
        { this.state.names.map(person => <li key={person.domainUUID}>{person.firstName} {person.lastName}</li>)}
      </ul>
      <GuestList view={this.render.bind(this)}/>
      </div>
    )
  }

}

export default ListContainer;
