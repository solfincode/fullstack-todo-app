import data from "../../utils/DATA";

const todoReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      const newTodo = state.filter((todo) => todo.id !== action.id);
      return newTodo;
    default:
      return state;
  }
};

export default todoReducer;
