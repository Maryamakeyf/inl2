// All the rules broken in the code;
// 1- Comments- This code is saturated with unnecessary comments such as commenting on the imports and variable declarations.
// Good code mostly documents itself.

//2-

// Imports needed for the project
import React, { useState } from "react";

// Declaring an interface
interface Todo {
  id: number;
  text: string;
}
// Home function that handles button functionality.
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars.
  // Correct: Remove eslint-disable-next-line comment and ensure all variables are used in the code.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // eslint-disable-next-line no-unused-vars
  // Correct: Remove eslint-disable-next-line comment and ensure all variables are used
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Return statement that returns the TODO-list and buttons
  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a task"
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/
              click-events-have-key-events */}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
