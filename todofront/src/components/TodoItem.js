import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { remove, toggle } from "../redux/actions/todoActions";
//styles
import {
  SMButton,
  Text,
  ItemContainer,
  Header,
  CheckBox,
  DisabledButton,
} from "../assests/styles";

const TodoItem = ({ title, id, loading, setLoading, fetchItems }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const removed = todos.filter((todo) => todo._id !== id);
    dispatch(remove(id));
    fetch(process.env.REACT_APP_API_URL + `/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(removed),
    })
      .then((data) => {
        fetchItems();
        setLoading(false);
      })
      .catch((err) => console.log(err));

    setLoading(true);
  };
  const handleSelected = (id) => {
    setIsCompleted(!isCompleted);
    dispatch(toggle(id));
  };

  return (
    <ItemContainer>
      <Header>
        <CheckBox
          type="checkbox"
          value={isCompleted}
          onChange={() => handleSelected(id)}
        />
        {isCompleted ? (
          <Text style={{ textDecorationLine: "line-through" }}>{title}</Text>
        ) : (
          <Text>{title}</Text>
        )}
      </Header>
      {isCompleted ? (
        <DisabledButton disabled>Delete</DisabledButton>
      ) : (
        <SMButton onClick={() => handleDelete(id)}>Delete</SMButton>
      )}
    </ItemContainer>
  );
};

export default TodoItem;
