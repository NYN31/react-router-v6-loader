export const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
  
    // return only 10 elements
    return data.slice(0, 10);
  };