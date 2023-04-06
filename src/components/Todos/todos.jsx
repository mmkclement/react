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
    const todos = [...this.state.todos];
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    todos.push({ id, title: this.state.todoTitle });
    this.setState({ todos });
  };

  deleteTodo = (id) => {
    const todos = [...this.state.todos];
    this.setState({todos:  todos.filter (todo => todo.id !==id)})
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
            <TodoItem
              title={todo.title}
              key={todo.id}
              deleteTodo={this.deleteTodo}
              id={todo.id}
            />
          ))}
        </ul>
      </div>
    );
  };
}

export default Todos;
