import "./ClearCompletedButton.css";

const ClearCompletedButton = (props) => {
  return (
    <button className="button button_clear" onClick={props.onClick}>
      Clear completed
    </button>
  );
};

export default ClearCompletedButton;
