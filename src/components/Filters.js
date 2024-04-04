import FilterButton from "./FilterButton";

export default function Filters(props) {
  return (
    <div className="todo-params">
      <span>1 todos left</span>
      <ul className="filtres">
        <FilterButton name="All" id="all" />
        <FilterButton name="Active" id="active" />
        <FilterButton name="Completed" id="completed" onClick={props.onClick}/>
      </ul>
      <button className="button button_clear">Clear completed</button>
    </div>
  );
}
