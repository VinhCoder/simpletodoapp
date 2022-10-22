import Header from "./layout/Header";
import AddTodo from "./AddToDo";
import { useEffect, useState } from "react";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Footer from "../store/containers/Footer";

function TodoApp() {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  });
  useEffect(() => {
    const config = {
      params: {
        _limit: 5,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((response) => setState({ todos: response.data }));
  }, []);
  const addSubmit = (text) => {
    const newData = {
      title: text,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", newData)
      .then((response) => setState({ todos: [...state.todos, response.data] }));
  };
  function handleCheckbox(id) {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }
  function handleDelete(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) =>
        setState({
          todos: state.todos.filter((todo) => {
            if (todo.id !== id) {
              return todo;
            }
          }),
        })
      );
  }
  return (
    <div className="container">
      <Header />
      <AddTodo addSubmit={addSubmit} />
      <Todos
        todos={state.todos}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default TodoApp;
