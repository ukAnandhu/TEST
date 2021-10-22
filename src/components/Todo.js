import React from 'react'
import TodoList from './TodoList'

function Todo({input, setInput, todo, setTodo}) {
    
    const inputHandler = (e) => {
        //console.log(e.target.value);
        setInput(e.target.value);
    }
   
     const clickHandler = (e) => {
       // setTodo([])
        e.preventDefault();
        //console.log(input);
        if (input === '') return
        //console.log(e);
        setTodo([
            ...todo, input
            //{text: input, completed:false, id: Math.random() * 1000}
        ])
        setInput("");
    } 
    const deleteAll = (index) => {
        //console.log(index)
        setTodo((state) =>  state.filter((item) => item === state[index]))
        //setTodo(todo.filter((el) => el.id === todo.id))
    }
   
    return (
        <div className="Todo">
            <div className="Todo-container">
                <h2 className="Todo__heading">Todo App</h2>
                <div className="Todo__input">

                    <input type="text"
                       required
                       onChange={inputHandler}
                       value={input}
                       className="Todo__input--value"
                       placeholder="Add your new Todo"
                    />
                    <button onClick={clickHandler}  className="Todo__button">+</button>
                </div>
               
                <div className="Todo__items">{
                    todo.map((item, index) => (<TodoList key={index} 
                    setTodo={setTodo} 
                    text={item} index={index}  />
                      )) } 
                </div> 

                 {/* <TodoList text="Buy a New Gaming Laptop" />
                  <TodoList text="Complete a previos task" />
                  <TodoList text="Create a video on YouTube" />
                  <TodoList text="Create a new portfolio site" /> */}
               
                 
               
               <div className="Todo__footer">
                    <p className="Todo__footer--header">You have {todo.length} pending tasks</p>
                    <button onClick={deleteAll} className="Todo__footer--button">Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Todo
