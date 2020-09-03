import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  render() {
    let todo = this.props.todo;
    return (
      <div>
        <h2>
          {todo.id}-{todo.title}
        </h2>
        <p>{todo.body}</p>
      </div>
    );
  }
}

export default TodoItem;
