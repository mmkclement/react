import React from 'react';
import classes from './Todoitem.module.css';

const Todoitem = props =>
  {
  return <li className={classes.todoitem}>{props.title}</li>;
  };
export default Todoitem;
