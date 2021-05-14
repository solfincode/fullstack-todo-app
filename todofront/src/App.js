import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
//components
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoTotal from "./components/TodoTotal";
//styles
import { Container, MainHeader } from "./assests/styles";
import "./App.css";

//action
import { setTodo } from "./redux/actions/todoActions";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos);

  //fetch items
  const fetchItems = useCallback(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((items) => dispatch(setTodo(items)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  //useEffect
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  return (
    <Container>
      <MainHeader>
        <h2>My Todo App</h2>
        {loading ? <p>loading...</p> : ""}
      </MainHeader>
      <TodoInput
        loading={loading}
        setLoading={setLoading}
        fetchItems={fetchItems}
      />
      {todoItems.map((todo) => {
        return (
          <TodoItem
            title={todo.title}
            id={todo._id}
            key={todo._id}
            loading={loading}
            setLoading={setLoading}
            fetchItems={fetchItems}
          />
        );
      })}
      <TodoTotal number={todoItems.length} />
    </Container>
  );
}

export default App;
