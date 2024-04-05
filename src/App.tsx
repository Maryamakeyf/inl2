// All the rules broken in the code;

// 1- Comments- This code is saturated with unnecessary comments such as commenting on the imports and variable declarations.
// Good code mostly documents itself. This is visible in lines 19,22,27 etc

//2-Formatting- In this code, the formatting is not consistent. tex line 17 is not consistent with the way other variables have been defined in the code.

//3- Variables- Variables in clean code are supposed to be consistent, make sense and descriptive. These rules are broken in line 32. Val is not descriptive and not consistent with how other variables are desclared in the code.

//4-Components- According to bulletproof-react code should be broken down into components rather than having one large component. To adhere to clean code principles this code should be broken down into smaller, focused components, each responsible for a specific task.

//5-Error handling- Clean code states that thrown errors are good to have. If this code were to be writte correclty i would incorporate error handling mechanism like displaying error message when form submission fails.

// 6- no-unused-vars- ESLint checks for variables that are declared but not used in this case i have disabled that rule.   The parameter id is passed into the function, but it is not referenced or utilized within the function's logic in line 49.

//7-Func-names- The onClick handler for the delete button uses an anonymous function expression instead of a named one, violating the func-names rule.

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
        <h1>To-Do APP</h1>
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
              {/* Breaking the 'func-names' rule by using an anonymous function */}
              <button
                onClick={function () {
                  handleDelete(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
