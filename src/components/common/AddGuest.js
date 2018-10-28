import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Col  } from 'reactstrap';
import './Common.css';

export default class AddGuest extends React.Component {
  state = {
    fName: '',
    lName: '',
    line1: '',
    line2: '',
    city: '',
    stateN: '',
    zip: ''
  };

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:12345/api/guest',
      { firstName: this.state.fName, 
        lastName: this.state.lName, 
        addresses: [{line1: this.state.line1, 
                    line2: this.state.line2, 
                    city: this.state.city, 
                    state: this.state.stateN, 
                    zip: this.state.zip}]
      }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({});
        this.setState({ fName: '',  lName: '', line1: '', line2: '', city: '', stateN: '', zip: ''});
        document.getElementById("guestInputForm").reset();
      });
  }

  render() {
    return (
      <div className="guestInputFormAdd">
        <Container>
          <Form id="guestInputForm" onSubmit={ (e) => this.handleSubmit(e) }>
            <FormGroup>
              <h2>Add Guests</h2>
            </FormGroup>
            <FormGroup row>
              <Label for="fNameInput" sm={2}>First Name</Label>
              <Col sm={10}>
                <Input type="text" name="fName" id="fNameInput" value={ this.state.fName } onChange={ (e) => { this.handleChange(e) } }/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lNameInput" sm={2}>Last Name</Label>
              <Col sm={10}>
                <Input type="text" name="lName" id="lNameInput" value={ this.state.lName } onChange={ (e) => { this.handleChange(e) } }/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={{ size: 12, offset: .5 }}>
                <h5>Address Info</h5>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="line1Input" sm={2}>Line 1</Label>
              <Col sm={10}>
                <Input type="text" name="line1" id="line1Input" value={ this.state.line1 } onChange={ (e) => { this.handleChange(e) } }/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="line2Input" sm={2}>Line 2</Label>
              <Col sm={10}>
                <Input type="text" name="line2" id="line2Input" value={ this.state.line2 } onChange={ (e) => { this.handleChange(e) } }/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="cityInput" sm={2}>City</Label>
              <Col sm={10}>
                <Input type="text" name="city" id="cityInput" value={ this.state.city } onChange={ (e) => { this.handleChange(e) } }/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="stateInput" sm={2}>State</Label>
              <Col sm={10}>
                <Input type="text" name="stateN" id="stateInput" value={ this.state.stateN } onChange={ (e) => { this.handleChange(e) } }/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="zipInput" sm={2}>Zip</Label>
              <Col sm={10}>
                <Input type="text" name="zip" id="zipInput" value={ this.state.zip } onChange={ (e) => { this.handleChange(e) } }/>
              </Col>
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}
