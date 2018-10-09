import React from 'react';
import axios from 'axios';

export default class GuestList extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
  }

  handleChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const firstName = {
      firstName: this.state.firstName
    };
    const lastName = {
      lastName: this.state.lastName
    };

    axios.post(`http://localhost:12345/api/guest`, { firstName: firstName, lastName: lastName })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
          <tbody>
            <tr>
            <label>
              Person FirstName:
              <input type="text" name="firstName" onChange={this.handleChangeFirstName} />
            </label>
            </tr>
            <tr>
            <label>
              Person LastName:
              <input type="text" name="lastName" onChange={this.handleChangeLastName} />
            </label>
            </tr>
          </tbody>
          </table>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
