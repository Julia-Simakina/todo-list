import "./TodoContainer.css";

import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import Filtres from "../Filters/Filters";

const TodoContainer = () => {
  return (
    <>
      <div className="todo-container">
        <AddTodo />
        <TodoList />
        <Filtres />
      </div>
    </>
  );
};

export default TodoContainer;
