import React, { Component } from "react";
import TodoItem from "../TodoItem/Todoitem";

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "play more",
      },
      {
        id: 2,
        title: "more ez",
      },
    ],
    todoTitle: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createNewTodo = (e) => {
    e.preventDefault();
    const todos = [...this.state.todos]; // ... means new array don' touch original array
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    todos.push({ id, title: this.state.todoTitle });
    this.setState({ todos });
  };

  render = () => {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.createNewTodo}>
          <input
            style={{ marginLeft: "4rem" }}
            type="text"
            name="todoTitle"
            value={this.state.todoTitle}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </form>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.title} />
          ))}
        </ul>
      </div>
    );
  };
}

export default Todos;
