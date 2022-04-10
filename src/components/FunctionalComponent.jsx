import React from "react";
import PropTypes from "prop-types";

function FunctionalComponent(props) {
  return (
    <React.Fragment>
      <h1>This is a functional react component</h1>
      <h2>{props.text}</h2>
    </React.Fragment>
  );
}

FunctionalComponent.propTypes = {
  text: PropTypes.string,
};

export default FunctionalComponent;
