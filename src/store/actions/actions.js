import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from "./actionNames";

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};

export const editTodo = (id, newText) => {
  return {
    type: EDIT_TODO,
    payload: { id, newText },
  };
};
