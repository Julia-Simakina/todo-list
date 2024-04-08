import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { visibilityFilter } from "./visibilityFilter";

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilter,
});

export default rootReducer;
