import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "test todo",
        body: "This my first react todo",
        completed: false,
      },
      {
        id: 2,
        title: "test todo 2",
        body: "This my second react todo",
        completed: true,
      },
      {
        id: 3,
        title: "test todo 3",
        body: "This my third react todo",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <Todos todos={this.state.todos} />
        </header>
      </div>
    );
  }
}

export default App;
