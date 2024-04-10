import "./EditField.css";

const EditField = (props) => {
  return (
    <input
      className="edit-field"
      autoFocus
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      onBlur={props.onBlur}
    />
  );
};

export default EditField;
