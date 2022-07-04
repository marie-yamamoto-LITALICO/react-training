import { Form } from './components/Form';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

export function App() {
  console.log("App initialized")
  return (
    // <!-- 2. class属性をCSSのために指定 -->
    <div className="todoapp">
      <Form></Form>
      <TodoList></TodoList>
      <Footer></Footer>
    </div>
  );
}
