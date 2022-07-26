export function Form(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    props.handleSubmit(inputValue);
    event.target[0].value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        placeholder="What need to be done?"
        autoComplete="off"
      />
    </form>
  );
}
