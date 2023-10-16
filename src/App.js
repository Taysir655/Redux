import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  //create a local state of component
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  //access to the state
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  //make the hundleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2> Todo List </h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go{" "}
          </button>
        </form>

        <ul className="allTodos">
          {/*rendering the todos in the component by mapping */}

          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  style={{
                    borderRadius: 30,
                    padding: 10,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "red",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
