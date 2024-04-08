import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filtres from "./Filters";
import { useSelector } from "react-redux";
import { getVisibleTodos } from "../store/selectors";

export default function TodoContainer() {
  // const { filteredTodo, filteredTodoLength } = useSelector(getVisibleTodos);
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
