import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";

const fetchTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data.slice(0, 20);
};

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(false);
  console.log(todos);

  useEffect(() => {
    setAllTodos();
  }, [todos]);

  const setAllTodos = async () => {
    const getTodos = await fetchTodo();
    console.log(getTodos);
    setTodos(getTodos);
  };

  if (!todos || loader) return <div>Loading.......!</div>;

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
