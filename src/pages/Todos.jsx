import React, { useState, useEffect } from "react";
import { fetchTodos } from "../api/fetchTodos";
import Todo from "../components/Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setAllTodos();
  }, [todos]);

  const setAllTodos = async () => {
    const getTodos = await fetchTodos();
    setTodos(getTodos);
  };

  if (!todos) return <div>Loading.......!</div>;

  return (
    <div>
      Todo list:
      <div>
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default Todos;
