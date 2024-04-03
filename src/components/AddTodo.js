import { useState } from "react";

export default function AddTodo(props) {
  const [text, setText] = useState(""); //текст инпута

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
      props.onAdd(newTodo);

      console.log(newTodo);
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
