import { SET_VISIBILITY_FILTER } from "../actions/actionNames";
import { SHOW_ALL } from "../actions/actionNames";

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};
