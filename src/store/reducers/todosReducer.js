import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from "../actions/actionNames";

const getInitialState = () => {
  return {
    todoList: [],
  };
};

export const todosReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.newText }
            : todo
        ),
      };
    default:
      return state;
  }
};
