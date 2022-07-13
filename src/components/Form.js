export function Form(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0].value;
    console.log(`入力欄の値: ${input}`);
    props.handleSubmit(input);
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
