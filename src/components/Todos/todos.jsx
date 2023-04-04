import React from "react";
import TodoItem from "../TodoItem/todoitem";
const Todos = (props) => (
  <div>
    <h1>{props.title}</h1>
    <TodoItem />
  </div>
);

export default Todos;
