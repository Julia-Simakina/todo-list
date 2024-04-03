import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todosClone.map((todo) => (
        <TodoItem id={todo.id} key={todo.id} text={todo.text} onClick={props.onClick} />
      ))}
    </ul>
  );
}
