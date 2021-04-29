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
