import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filtres from "./Filters";
// import { addTodo, removeTodo } from "../App";
// import { useSelector, useDispatch } from "react-redux";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodo) => setTodos([...todos, newTodo]);

  // const todos = useSelector(state => state.todos.todos);
  // const dispatch = useDispatch();
  // const addNewTodo = (text) => {
  //   dispatch(addTodo(text));
  // };
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="todo-container">
        <AddTodo onAdd={addNewTodo} />
        <TodoList todos={todos} onRemove={removeTodo} />
        <Filtres />
      </div>
    </>
  );
}
