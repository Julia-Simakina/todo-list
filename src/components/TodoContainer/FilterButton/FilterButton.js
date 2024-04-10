import "./FilterButton.css";

const FilterButton = (props) => {
  return (
    <li>
      <button
        onClick={props.onClick}
        className={`button button_filter ${
          props.isActive ? "button_filter_active" : ""
        }`}
      >
        {props.name}
      </button>
    </li>
  );
};

export default FilterButton;
