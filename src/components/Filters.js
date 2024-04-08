import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  removeCompletedTodo,
  setVisibilityFilter,
} from "../store/actions/actions";
import { getVisibleTodos } from "../store/selectors";
import FilterButton from "./FilterButton";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from "../store/actions/actionNames";

export default function Filters() {
  //const { todoList } = useSelector((state) => state.todos);
  //const { todoList } = useSelector(getVisibleTodos);

  // const leftTodos = useMemo(
  //   () => todoList.filter((todo) => todo.completed === false).length,
  //   [todoList]
  // );

  const dispatch = useDispatch();

  const handleRemoveCompletedTodo = () => {
    dispatch(removeCompletedTodo());
  };

  const showCompletedTodo = () => {
    console.log(
      "setVisibilityFilter(SHOW_COMPLETED) >>",
      setVisibilityFilter(SHOW_COMPLETED)
    );
    dispatch(setVisibilityFilter(SHOW_COMPLETED));
  };

  const showActiveTodo = () => {
    console.log(
      "setVisibilityFilter(SHOW_ACTIVE) >>",
      setVisibilityFilter(SHOW_ACTIVE)
    );
    dispatch(setVisibilityFilter(SHOW_ACTIVE));
  };

  return (
    <div className="todo-params">
      {/* <span>
        {leftTodos} {leftTodos === 1 ? "todo" : "todos"} left
      </span> */}
      <ul className="filtres">
        <FilterButton name="All" id="all" />
        <FilterButton name="Active" id="active" onClick={showActiveTodo} />
        <FilterButton
          name="Completed"
          id="completed"
          onClick={showCompletedTodo}
        />
      </ul>
      <button
        className="button button_clear"
        onClick={handleRemoveCompletedTodo}
      >
        Clear completed
      </button>
    </div>
  );
}
