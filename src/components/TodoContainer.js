import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filtres from './Filters';
import { useSelector } from 'react-redux';
import { getVisibleTodos } from '../store/selectors/selectors';

export default function TodoContainer() {
  // const { filteredTodo, activeTodosCount } = useSelector(getVisibleTodos);
  return (
    <>
      <div className='todo-container'>
        <AddTodo />
        <TodoList />
        <Filtres />
      </div>
    </>
  );
}
