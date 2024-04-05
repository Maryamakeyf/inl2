// All the rules broken in the code;

// 1- Comments- This code is saturated with unnecessary comments such as commenting on the imports and variable declarations.
// Good code mostly documents itself. This is visible in lines----------------------

//2-Formatting- In this code, the formatting is not consistent. tex line 17 is not consistent with the way other variables have been defined in the code.

//3- Variables- Variables in clean code are supposed to be consistent, make sense and descriptive. These rules are broken in line 26. Val is not descriptive and not consistent with how other variables are desclared in the code.

//4-Components- According to bulletproof-react code should be broken down into components rather than having one large component. To adhere to clean code principles this code should be broken down into smaller, focused components, each responsible for a specific task.

//5-Error handling- Clean code states that thrown errors are good to have. If this code were to be writte correclty i would incorporate error handling mechanism like displaying error message when form submission fails.

// Imports needed for the project
import React, { useState } from "react";

// Declaring an interface
interface Todo {
  id: number;
  text: string;
}
// Home function that handles button functionality.
export default function Home() {
  //Formatting
  const [TODOS, SETTOTODS] = useState<Todo[]>([]);
  // Variables
  const [Val, setVal] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars.
  // Correct: Remove eslint-disable-next-line comment and ensure all variables are used in the code.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Val.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: Val };
    SETTOTODS([...TODOS, newTodo]);
    setVal("");
  };

  // eslint-disable-next-line no-unused-vars
  // Correct: Remove eslint-disable-next-line comment and ensure all variables are used
  const handleDelete = (id: number) => {
    SETTOTODS(TODOS.filter((todo) => todo.id !== id));
  };

  // Return statement that returns the TODO-list and buttons
  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={Val}
            onChange={handleChange}
            placeholder="Enter a task"
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {TODOS.map((todo) => (
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
