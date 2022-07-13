import { Form } from './components/Form';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { useState } from 'react';

export function App() {
  console.log("App initialized")

  // stateを定義する
  const initialList = {todoItems: []};
  const [state, setState] = useState(initialList);

  const handleSubmit = (inputValue) => {
    setState((currentState) => {
      const todoItems = currentState.todoItems;
      return {todoItems: [...todoItems, inputValue]};
    });
  }

  return (
    // <!-- 2. class属性をCSSのために指定 -->
    <div className="todoapp">
      <Form handleSubmit={handleSubmit}></Form>
      <TodoList todoItems={state.todoItems}></TodoList>
      <Footer></Footer>
    </div>
  );
}
