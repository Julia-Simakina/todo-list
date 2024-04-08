import { createSelector } from "reselect";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "./actions/actionNames";

export const getTodos = (state) => state.todos.todoList;
export const getVisibilityFilter = (state) => state.visibilityFilter;

// const createAppSelector = createSelector.withTypes()

export const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {
    console.log("todos >".todos);
    console.log("visibilityFilter >".visibilityFilter);

    let filteredTodo = [];

    switch (visibilityFilter) {
      case SHOW_COMPLETED:
        console.log(">>>", todos);
        filteredTodo = todos.filter((todo) => todo.completed === true);
        break;
      case SHOW_ACTIVE:
        filteredTodo = todos.filter((todo) => !todo.completed);
        break;
      case SHOW_ALL:
      default:
        filteredTodo = todos;
    }

    return { filteredTodo: filteredTodo };
  }
);
