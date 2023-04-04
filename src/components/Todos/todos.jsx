import React from "react";
import TodoItem from "../TodoItem/todoitem";
const Todos = (props) => (
  <div>
    <h1>{props.title}</h1>
    <TodoItem title= "Sound from bros" />
    <TodoItem  title = "Start to the end "/>
  </div>
);

export default Todos;
