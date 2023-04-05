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
    todoTitle: "", // this is going to assign value={this.state.todoTitle }
  };

  handleChange = (e) => {
    this.setState({
      todoTitle: e.target.value,
    });
  };

  render = () => {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          style={{ marginLeft: "4rem" }}
          type="text"
          name="title"
          value={this.state.todoTitle}
          onChange={this.handleChange}
        />
        <button>Save</button>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem title={todo.title} />
          ))}
        </ul>
      </div>
    );
  };
}

export default Todos;
