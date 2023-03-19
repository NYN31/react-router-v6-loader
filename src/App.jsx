import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from "./pages/Todos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
