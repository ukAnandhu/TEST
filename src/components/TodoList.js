import React from 'react'

function TodoList({text, todo, todos, setTodo}) {
    const deleteHandler = () => {  
        setTodo(todo.filter((el) => el.id !== todos.id)); 
    }
    
    return (
        <div className="list">
            <div className="list-items">
                <li className="list__values">{text}</li> 
                <button className="list__button" onClick={deleteHandler}>delete</button>
            </div>
        </div>
    )
}

export default TodoList
