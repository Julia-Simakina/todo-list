import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/actionNames';

export const getTodos = state => state.todos.todoList;
export const getVisibilityFilter = state => state.todos.currentFilter;

export const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {
    let filteredTodo = [];
    let activeTodosCount = 0;

    switch (visibilityFilter) {
      case SHOW_COMPLETED:
        filteredTodo = todos.filter(todo => todo.completed);
        break;
      case SHOW_ACTIVE:
        filteredTodo = todos.filter(todo => {
          if (!todo.completed) {
            activeTodosCount++;
            return true;
          }
          return false;
        });
        break;
      case SHOW_ALL:
      default:
        filteredTodo = todos;
        activeTodosCount = todos.filter(todo => !todo.completed).length;
    }

    return {
      filteredTodo: filteredTodo,
      activeTodosCount: activeTodosCount
    };
  }
);
