import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { filteredTodosSelector } from "../../store/selectors/selectors";

const TodoList = () => {
  const { filteredTodos } = useSelector(filteredTodosSelector);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
