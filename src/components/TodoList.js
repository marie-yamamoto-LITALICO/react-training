import { Todo } from './Todo';

export function TodoList() {
  return (
    //  <!-- 4. TodoアプリのメインとなるTodoリスト --> 
    <div className="todo-list">
      {/* <!-- 動的に更新されるTodoリスト --> */}
      <Todo></Todo>
    </div>
  );
}
