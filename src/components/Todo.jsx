import React from "react";

const Todo = ({ todo }) => {
  return (
    <ul>
      <li>id: {todo.id}</li>
      <li>userId: {todo.userId}</li>
      <li>title: {todo.title}</li>
    </ul>
  );
};

export default Todo;
