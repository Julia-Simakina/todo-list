import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleTodos } from '../store/selectors/selectors';

const TodoCounter = React.memo(() => {
  const { activeTodosCount } = useSelector(getVisibleTodos);

  return (
    <span>
      {activeTodosCount} {activeTodosCount === 1 ? 'todo' : 'todos'} left
    </span>
  );
});

export default TodoCounter;
