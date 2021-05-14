import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

//actions
import { add } from "../redux/actions/todoActions";

//styles
import { Button, Input } from "../assests/styles";

const TodoInput = ({ loading, setLoading, fetchItems }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const UpdateItems = useCallback(
    (newItem) => {
      fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((data) => {
          fetchItems();
          setLoading(false);
        })
        .catch((err) => console.log(err));
      setLoading(true);
    },
    [fetchItems, setLoading]
  );

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: todo,
        done: false,
      };
      UpdateItems(newTodo);
      dispatch(add(newTodo));
    }
    setTodo("");
  };
  return (
    <>
      <form style={{ display: "flex", flexDirection: "row" }}>
        <Input
          type="text"
          maxLength="25"
          value={todo}
          placeholder="text limit is 25 characters"
          onChange={handleOnChange}
        />
        <Button onClick={(e) => handleAdd(e)}>Submit</Button>
      </form>
    </>
  );
};

export default TodoInput;
