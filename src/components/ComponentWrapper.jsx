import React, { Component } from "react";
import { dummyState as externalState } from "@common/dummyState";

export default function componentWrapper(WrappedComponent) {
  class Wrapper extends Component {
    render() {
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} external={externalState} />
        </React.Fragment>
      );
    }
  }

  return Wrapper;
}
