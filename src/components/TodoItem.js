import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, editTodo } from '../store/actions/actions';
import { useState } from 'react';
import EditField from './EditField';

export default function TodoItem(props) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(props.todo.id));
  };

  const handleCheckboxChange = () => {
    dispatch(toggleTodo(props.todo.id));
  };

  const handleEditTodo = () => {
    dispatch(editTodo(editId, editText));
    setEditId(null);
    setEditText('');
  };

  const handleEditChange = e => {
    setEditText(e.target.value);
  };

  return (
    <li className='todo-list__item item' id={props.todo.id}>
      {!editId ? (
        <>
          {' '}
          <input
            type='checkbox'
            className='item__checkbox'
            onChange={handleCheckboxChange}
            checked={props.todo.completed}
          />
          <label
            className={`item__description ${props.todo.completed && 'item__description_checked'}`}
            onDoubleClick={() => {
              setEditId(props.todo.id);
              setEditText(props.todo.text);
            }}
          >
            {props.todo.text}
          </label>
        </>
      ) : (
        <input value={editText} onChange={handleEditChange} onBlur={() => handleEditTodo()} />
      )}

      <button className='button item__delete-btn' onClick={handleRemoveTodo}>
        ×
      </button>
    </li>
  );
}
