import React, { useState } from 'react'
import Todo from './components/Todo'
import './dist/css/main.css'


function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

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
