export function Footer(props) {
  return (
    <footer className="footer">
      {/* <!-- 5. Todoアイテム数の表示 --> */}
      <span>Todoアイテム数: {props.todoItems.length}</span>
    </footer>
  );
}
