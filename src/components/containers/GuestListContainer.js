import React, { Component } from 'react';
import AddGuest from '../common/AddGuest';
import { Table, Container } from 'reactstrap';
import axios from 'axios';
import './../common/Common.css';

class GuestListContainer extends Component {

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
        <Container>
          <h2>Guests</h2>
          <Table hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>UUID</th>
              </tr>
            </thead>
            <tbody>
              { this.state.names.map(person => <tr key={person.domainUUID}><td>{person.firstName}</td><td>{person.lastName}</td><td>{person.domainUUID}</td></tr>)}
            </tbody>
          </Table>
        </Container>
        <div>
          &nbsp;
        </div>
        <AddGuest view={this.render.bind(this)}/>
      </div>
    )
  }

}

export default GuestListContainer;
