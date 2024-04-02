import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterButton from './components/FilterButton';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='todo-container'>
        <AddTodo />
        <TodoList />
        <div className='todo-params'>
          <span>1 todos left</span>
          <ul className='filtres'>
            <FilterButton name='All' />
            <FilterButton name='Active' />
            <FilterButton name='Completed' />
          </ul>
          <button className='button button_clear'>Clear completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
