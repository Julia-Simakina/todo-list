import { SET_VISIBILITY_FILTER } from '../actions/actionNames';

export const visibilityFilterReducer = (state = 'All', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
