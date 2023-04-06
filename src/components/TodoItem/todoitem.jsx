import React from "react";
import classes from "./Todoitem.module.css";

const Todoitem = (props) => {
  return (
    <li className={classes.todoitem}>
      {props.title}
      <button onClick={props.deleteTodo.bind(this,props.id)} className={classes.crossX}>
        x
      </button>
    </li>
  );
};
export default Todoitem;
