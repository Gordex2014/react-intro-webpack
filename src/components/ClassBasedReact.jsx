import PropTypes from "prop-types";
import React, { Component } from "react";

export default class ClassBasedReact extends Component {
  static propTypes = { text: PropTypes.string };

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>This is a class based react component</h1>
        <h2>{this.state.text}</h2>
        <h2>{this.props.external.dummy}</h2>
      </React.Fragment>
    );
  }
}
