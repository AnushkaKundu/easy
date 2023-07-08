import React, { Component } from "react";
import Switch from "react-switch";

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#1ca782d3"
          offColor="#ccc"
        />
      </label>
    );
  }
}

export default Mode;
