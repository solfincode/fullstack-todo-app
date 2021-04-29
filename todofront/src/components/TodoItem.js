import React, { useState } from "react";
import { useDispatch } from "react-redux";
//actions
import { remove } from "../redux/actions/todoActions";
//styles
import {
  SMButton,
  Text,
  ItemContainer,
  Header,
  CheckBox,
  DisabledButton,
} from "../assests/styles";

const TodoItem = ({ title, id }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(remove(id));
  };
  const handleSelected = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <ItemContainer>
      <Header>
        <CheckBox
          type="checkbox"
          value={isCompleted}
          onChange={handleSelected}
        />
        {isCompleted ? (
          <Text style={{ textDecorationLine: "line-through" }}>{title}</Text>
        ) : (
          <Text>{title}</Text>
        )}
      </Header>
      {isCompleted ? (
        <DisabledButton>Delete</DisabledButton>
      ) : (
        <SMButton onClick={() => handleDelete(id)}>Delete</SMButton>
      )}
    </ItemContainer>
  );
};

export default TodoItem;
