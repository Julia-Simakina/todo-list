import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filtres from "./Filters";

export default function TodoContainer() {
  return (
    <>
      <div className="todo-container">
        <AddTodo />
        <TodoList />
        <Filtres />
      </div>
    </>
  );
}
