import React from "react";

const Todo = ({ todo }) => {
  return (
    <ul>
      <li>{todo.id}</li>
      <li>{todo.title}</li>
    </ul>
  );
};

export default Todo;
