import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { getVisibleTodos } from "../store/selectors";

export default function TodoList() {
  const { filteredTodo, filteredTodoLength } = useSelector(getVisibleTodos);

  return (
    <ul className="todo-list">
      {filteredTodo.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {/* <span>{filteredTodoLength}</span> */}
    </ul>
  );
}
