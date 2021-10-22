import React, { useState } from 'react'
import Todo from './components/Todo'
import './css/main.css'


function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(['Buy a New Gaming Laptop', 'Complete a previos task', 'Create a video on YouTube', 'Create a new portfolio site']);

  return (
    <div className="App">
      <Todo 
         input={input}
         setInput={setInput}
         todo={todo}
         setTodo={setTodo}
      />
    </div>
  );
}

export default App;
