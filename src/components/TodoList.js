import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";

function TodoList({text, setTodo, index}) {
  
    console.log(index, 'g');
    
    const deleteHandler = (index) => {  
        //setTodo(todo.filter((el) => el.id !== todos.id)); 
        //console.log(index);
        setTodo((state) =>  state.filter((item) => item !== state[index]))

    }
    console.log(text, 'bla');
    return (
        <div className="list" >
            <div className="list-items">
                <li className="list__values" >{text}</li> 
                <div className="list__button" onClick={() => deleteHandler(index)}><AiTwotoneDelete className="list__delete" /></div>
            </div>
        </div>
    )
}

export default TodoList
