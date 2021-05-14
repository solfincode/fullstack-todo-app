export const add = (item) => {
  return {
    type: "ADD_TODO",
    payload: item,
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE_TODO",
    id: id,
  };
};

export const toggle = (id) => {
  return {
    type: "TOGGLE_TODO",
    id: id,
  };
};

export const setTodo = (items) => {
  return {
    type: "SET_TODO",
    todos: items,
  };
};
