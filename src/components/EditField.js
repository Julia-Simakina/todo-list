export default function EditField(props) {
  return (
    <input
      className='edit-field'
      autoFocus
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      onBlur={props.onBlur}
    />
  );
}
