export default function TodoItem() {
  return (

      <li className="todo-list__item item">
        <input type="checkbox" className="item__checkbox"></input>
        <label className="item__description"> {"task 1"}</label>
        <button className='button item__delete-btn'>×</button>
      </li>

  );
}
