import React,{ Component } from "react";
import { nanoid } from 'nanoid';
import { Forma, Button, Label} from "./Form.styled";

class Form extends Component{
  state = {
    name: '',
    number: '',
  }

  nameId = nanoid();
  telId = nanoid();

  handleInputChange = event => {
      const {name, value} = event.currentTarget
    this.setState({
      [name]: value,
    });
  }

    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state);
    this.reset();
  }

    reset = () => {
    this.setState({ name: '', number: ''});
  }

  render() {
    return (
      <Forma onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>Name
          <input type="text" name="name" required id={this.nameId} value={this.state.name} onChange={ this.handleInputChange} />
        </Label>
        <Label htmlFor={this.telId}>Number
          <input type="tel" name="number" required id={this.telId} value={this.state.number} onChange={ this.handleInputChange} />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    )
  }
}

export default Form;