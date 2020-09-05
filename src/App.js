import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import { uuid } from "uuidv4";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "test todo",
        completed: false,
      },
      {
        id: 2,
        title: "test todo 2",
        completed: true,
      },
      {
        id: 3,
        title: "test todo 3",
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

  addTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          title: title,
          completed: false,
        },
      ],
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
