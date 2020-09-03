import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  state = {};

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      margin: "2px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    let todo = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {todo.id}-{todo.title}
        </p>
      </div>
    );
  }
}

TodoItem.protoTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
