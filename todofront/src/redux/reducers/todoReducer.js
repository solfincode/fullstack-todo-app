const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      const newTodo = state.filter((todo) => todo.id !== action.id);
      return newTodo;
    case "TOGGLE_TODO":
      const newState = state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      return newState;
    case "SET_TODO":
      return action.todos;
    default:
      return state;
  }
};

export default todoReducer;
