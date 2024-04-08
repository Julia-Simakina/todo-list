import { useDispatch } from "react-redux";
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

export default function Filters(props) {
  const { filteredTodoLength } = useSelector(getVisibleTodos);

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

  const showAllTodo = () => {
    console.log(
      "setVisibilityFilter(SHOW_ALL) >>",
      setVisibilityFilter(SHOW_ALL)
    );
    dispatch(setVisibilityFilter(SHOW_ALL));
  };

  // let leftTodos = showActiveTodo();
  console.log("leftTodos", setVisibilityFilter(SHOW_ALL));

  return (
    <div className="todo-params">
      <span>
        {filteredTodoLength} {filteredTodoLength === 1 ? "todo" : "todos"} left
      </span>
      <ul className="filtres">
        <FilterButton name="All" id="all" onClick={showAllTodo} />
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
