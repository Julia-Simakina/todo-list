import { useState } from "react";
export default function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(props.todo.completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    props.todo.completed = !isChecked;
  };

  return (
    <li className="todo-list__item item" id={props.todo.id}>
      <input
        type="checkbox"
        className="item__checkbox"
        onChange={handleCheckboxChange}
        checked={isChecked}
      />

      <label
        className={`item__description ${
          isChecked && "item__description_checked"
        }`}
      >
        {props.todo.text}
      </label>

      <button
        className="button item__delete-btn"
        onClick={() => props.onRemove(props.todo.id)}
      >
        ×
      </button>
    </li>
  );
}
