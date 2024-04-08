import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCompletedTodo, setVisibilityFilter } from '../store/actions/actions';
import FilterButton from './FilterButton';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../store/actions/actionNames';
import TodoCounter from './Counter';

const filterButtons = [
  { id: 'All', filter: SHOW_ALL },
  { id: 'Active', filter: SHOW_ACTIVE },
  { id: 'Completed', filter: SHOW_COMPLETED }
];

export default function Filters() {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(state => state.todos.currentFilter);

  const handleClearCompletedTodo = () => {
    dispatch(removeCompletedTodo());
  };

  const handleSetVisibilityFilter = filter => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div className='todo-params'>
      <TodoCounter />
      <ul className='filters'>
        {filterButtons.map(button => (
          <FilterButton
            key={button.id}
            name={button.id}
            isActive={visibilityFilter === button.filter}
            onClick={() => handleSetVisibilityFilter(button.filter)}
          />
        ))}
      </ul>
      <button className='button button_clear' onClick={handleClearCompletedTodo}>
        Clear completed
      </button>
    </div>
  );
}
