import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todoList } = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
