import React, { Component } from 'react';
import { Filter, Label } from './Filter.styled';

class Find extends Component {
  handleChange = event => {
    this.props.onFindInput(event.currentTarget.value);
  };

  render() {
    return (
      <Label>
        <Filter type="text" onChange={this.handleChange}></Filter>
      </Label>
    );
  }
}

export default Find;
