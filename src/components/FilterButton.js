export default function FilterButton(props) {
  return (
    <li>
      <button onClick={props.onClick} className="button button_filter">
        {props.name}
      </button>
    </li>
  );
}
