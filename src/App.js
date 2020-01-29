import React from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="app">
          <TodoTemplate />
        </div>
      </>
    );
  }
}

export default App;
