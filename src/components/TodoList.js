import TodoItem from "./TodoItem";
export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem
          // id={todo.id}
          key={todo.id}
          // text={todo.text}
          // completed={todo.completed}
          todo={todo}
          onRemove={props.onRemove}
        />
      ))}
    </ul>
  );
}
