import React from "react";

import ClassBasedReact from "@components/ClassBasedReact";
import FunctionalComponent from "@components/FunctionalComponent";
import componentWrapper from "@components/ComponentWrapper";

import "@styles/global.scss";

function App() {
  const WrappedComponent = componentWrapper(ClassBasedReact);

  return (
    <React.Fragment>
      <WrappedComponent text="Hello" />
      <FunctionalComponent text="Hello World!" />
    </React.Fragment>
  );
}

export default App;
