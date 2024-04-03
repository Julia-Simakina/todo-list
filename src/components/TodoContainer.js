import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterButton from "./FilterButton";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  let todosClone = [...todos];

  const addNewTodo = (newTodo) => setTodos([...todos, newTodo]);

  const handleDeleteClick = (event) => {
    console.log(event.target.closest("li"));
    const itemId = Number(event.target.closest("li").id);
    setTodos(
      todosClone.filter((item) => {
        return item.id !== itemId;
      })
    );
  };

  const handleActiveClick = () => {
    // let activeTodo = [...todos];
  };

  return (
    <div className="todo-container">
      <AddTodo onAdd={addNewTodo} />
      <TodoList
        todos={todos}
        todosClone={todosClone}
        onClick={handleDeleteClick}
      />
      <div className="todo-params">
        <span>1 todos left</span>
        <ul className="filtres">
          <FilterButton name="All" id="all" />
          <FilterButton name="Active" id="active" onClick={handleActiveClick} />
          <FilterButton name="Completed" completed />
        </ul>
        <button className="button button_clear">Clear completed</button>
      </div>
    </div>
  );
}
