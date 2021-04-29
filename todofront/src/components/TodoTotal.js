import React from "react";

//styles
import { BottomContainer } from "../assests/styles";
const TodoTotal = ({ number }) => {
  return (
    <BottomContainer>
      <h3>Total Todo Items are: {number}</h3>
    </BottomContainer>
  );
};

export default TodoTotal;
