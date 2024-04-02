import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="todo-container">
        <AddTodo />
        <ul className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    </div>
  );
}

export default App;
