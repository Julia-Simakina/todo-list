import { useMemo } from 'react';
import FilterButton from './FilterButton';
import { useSelector } from 'react-redux';

export default function Filters(props) {
  const { todoList } = useSelector(state => state.todos);

  const leftTodos = useMemo(
    () => todoList.filter(todo => todo.completed === false).length,
    [todoList]
  );

  return (
    <div className='todo-params'>
      <span>
        {leftTodos} {leftTodos === 1 ? 'todo' : 'todos'} left
      </span>
      <ul className='filtres'>
        <FilterButton name='All' id='all' />
        <FilterButton name='Active' id='active' />
        <FilterButton name='Completed' id='completed' onClick={props.onClick} />
      </ul>
      <button className='button button_clear'>Clear completed</button>
    </div>
  );
}
