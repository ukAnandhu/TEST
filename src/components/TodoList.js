import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";

function TodoList({text, todo, todos, setTodo}) {
    const deleteHandler = () => {  
        setTodo(todo.filter((el) => el.id !== todos.id)); 
    }
    
    return (
        <div className="list">
            <div className="list-items">
                <li className="list__values">{text}</li> 
                <div className="list__button" onClick={deleteHandler}><AiTwotoneDelete size='30px'/></div>
            </div>
        </div>
    )
}

export default TodoList
