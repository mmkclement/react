import React, { Component } from "react";
import TodoItem from "../TodoItem/Todoitem";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  render = () => {
    return (
      <div>
        <h1>{this.props.title}</h1>
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
