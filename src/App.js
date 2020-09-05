import React, { Component } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/pages/About";
import Axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      (resp) => {
        this.setState({
          todos: resp.data,
        });
      }
    );
  }

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
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    }).then((resp) => {
      this.setState({
        todos: [resp.data, ...this.state.todos],
      });
    });
  };

  deleteTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (resp) => {
        this.setState({
          todos: this.state.todos.filter((todo) => {
            return todo.id !== id;
          }),
        });
      }
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route
            path="/"
            exact
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}
          ></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
