import { useSelector } from "react-redux";

//components
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoTotal from "./components/TodoTotal";
//styles
import { Container } from "./assests/styles";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <Container>
      <h2>My Todo App</h2>
      <TodoInput />
      {todos.map((todo) => {
        return <TodoItem title={todo.title} id={todo.id} key={todo.id} />;
      })}
      <TodoTotal number={todos.length} />
    </Container>
  );
}

export default App;
