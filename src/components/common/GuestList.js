import React from 'react';
import axios from 'axios';
import { Form } from 'antd';

const FormItem = Form.Item;

export default class GuestList extends React.Component {
  state = {
    fName: '',
    lName: ''
  };

  handlefNameChange = event => {this.setState({ fName: event.target.value })};
  handlelNameChange = event => {this.setState({ lName: event.target.value })};

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:12345/api/guest',
      { firstName: this.state.fName, lastName: this.state.lName})
      .then(res => {
        console.log(res);
        console.log(res.data);
        //window.location.reload();
      })
  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <label>First Name:  <input type="text" name="this.state.fName" onChange={this.handlefNameChange} /></label>
        </FormItem>
        <FormItem>
          <label>Last Name:  <input type="text" name="this.state.lName" onChange={this.handlelNameChange} /></label><br />
        </FormItem>
        <button type="submit">Add</button>
      </Form>
    )
  }
}
