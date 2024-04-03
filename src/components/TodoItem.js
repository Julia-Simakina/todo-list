import { useState } from "react";
export default function TodoItem(props) {
  // const [active, setActive] = useState([
  //   { id: 1712155102505, text: "1", completed: false },
  //   { id: 1712155102505, text: "2", completed: false },
  //   { id: 1712155102505, text: "3", completed: false },
  // ]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="todo-list__item item" id={props.id}>
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
        {props.text}
      </label>

      <button className="button item__delete-btn" onClick={props.onClick}>
        ×
      </button>
    </li>
  );
}
