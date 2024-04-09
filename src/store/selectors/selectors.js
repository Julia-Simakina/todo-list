import { createSelector } from "reselect";
import { SHOW_ALL, SHOW_ACTIVE } from "../actions/actionNames";
export const getTodos = (state) => state.todos.todoList;
export const getVisibilityFilter = (state) => state.todos.currentFilter;

export const filteredTodosSelector = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {
    const filters = {
      SHOW_COMPLETED: (todo) => todo.completed,
      SHOW_ACTIVE: (todo) => !todo.completed,
      SHOW_ALL: () => true,
    };
    let filteredTodos = todos.filter(
      filters[visibilityFilter] || filters[SHOW_ALL]
    );
    let activeTodosCount = todos.filter(filters[SHOW_ACTIVE]).length;

    return {
      filteredTodos: filteredTodos,
      activeTodosCount: activeTodosCount,
    };
  }
);
