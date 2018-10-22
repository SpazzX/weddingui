import React, { Component } from 'react';
import AddGuest from '../common/AddGuest';
import { Table } from 'reactstrap';
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
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>UUID</th>
          </tr>
        </thead>
        <tbody>
          { this.state.names.map(person => <tr key={person.domainUUID}><td>{person.firstName}</td> <td>{person.lastName}</td> <td>{person.domainUUID}</td> </tr>)}
        </tbody>
      </Table>
      <h2>Add Guests</h2>
      <AddGuest view={this.render.bind(this)}/>
      </div>
    )
  }

}

export default ListContainer;
