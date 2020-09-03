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

  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <Todos todos={this.state.todos} markComplete={this.markComplete} />
        </header>
      </div>
    );
  }
}

export default App;
