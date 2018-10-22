import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';

export default class AddGuest extends React.Component {
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
        this.setState({});
        this.setState({ fName: '',  lName: ''});
        document.getElementById("GuestInputForm").reset();
        //window.location.reload(true);
      });
  }

  render() {
    return (

      <Form className="form" id="GuestInputForm" onSubmit={ (e) => this.handleSubmit(e) }>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" name="this.state.fName" value={ this.state.fName } onChange={ (e) => { this.handlefNameChange(e) } }/>
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="text" name="this.state.lName" value={ this.state.lName } onChange={ (e) => { this.handlelNameChange(e) } }/>
        </FormGroup>
        <Button color="success">Submit</Button>
      </Form>
    )
  }
}
