import { Todo } from './Todo';

export function TodoList(props) {
  return (
    //  <!-- 4. TodoアプリのメインとなるTodoリスト --> 
    <div className="todo-list">
        <ul>
          {
            props.todoItems.map((todoItem, index) => <li key={index}><Todo item={todoItem}/></li>)
          }
        </ul>
    </div>
  );
}
