import React, { useState } from "react";
import { useDispatch } from "react-redux";

//actions
import { add } from "../redux/actions/todoActions";

//styles
import { Button, Input } from "../assests/styles";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: todo,
        completed: false,
      };
      dispatch(add(newTodo));
    }
    setTodo("");
  };
  return (
    <>
      <form style={{ display: "flex", flexDirection: "row" }}>
        <Input type="text" value={todo} onChange={handleOnChange} />
        <Button onClick={(e) => handleAdd(e)}>Submit</Button>
      </form>
    </>
  );
};

export default TodoInput;
