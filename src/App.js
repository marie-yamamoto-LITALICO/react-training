import { Form } from './components/Form';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { useState } from 'react';

export function App() {
  console.log("App initialized")

  // stateを定義する
  const [todoItems, setTodoItems] = useState([]);

  const handleSubmit = (inputValue) => {
    setTodoItems((currentState) => {
      const todoItems = currentState;
      return [...todoItems, inputValue];
    });
  }

  return (
    // <!-- 2. class属性をCSSのために指定 -->
    <div className="todoapp">
      <Form handleSubmit={handleSubmit}/>
      <TodoList todoItems={todoItems}/>
      <Footer todoItems={todoItems}/>
    </div>
  );
}
