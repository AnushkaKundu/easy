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
    this.props.toggleTheme(); // Toggle the theme in the parent component
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
          offColor="#202123d4"
        />
      </label>
    );
  }
}

export default Mode;
