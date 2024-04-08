import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { getVisibleTodos } from "../store/selectors";
import { getTodos } from "../store/selectors";

export default function TodoList() {
  const { filteredTodo } = useSelector(getVisibleTodos);

  // const { todoList } = useSelector(getVisibleTodos);

  return (
    <ul className="todo-list">
      {filteredTodo.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
