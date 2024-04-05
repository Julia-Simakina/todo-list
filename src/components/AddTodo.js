import { useState } from "react";
import { addTodo } from "../store/actions/actions";
import { useDispatch } from "react-redux";

export default function AddTodo() {
  const [text, setText] = useState(""); //текст инпута
  const dispatch = useDispatch();

  const addNewTodo = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  function createTodo(text, completed = false) {
    return {
      id: Date.now(),
      text,
      completed,
    };
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && text.trim()) {
      const newTodo = createTodo(text);
      addNewTodo(newTodo);
      setText("");
    }
  };

  return (
    <input
      onKeyDown={handleKeyDown}
      className="todo-input"
      placeholder="What needs to be done?"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
