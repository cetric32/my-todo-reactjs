import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="addForm">
          <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            className="inputAdd"
            value={this.state.title}
            onChange={this.onChange}
          />
          <input type="submit" value="Add Todo" className="btn" />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
