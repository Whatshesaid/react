import React from "react"

function Todo(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" 
                   checked={props.task.completed}
                   onChange={() => props.handleChange(props.task.id)}
            />
            <p>{props.task.text}</p>
        </div>
    )
}

export default Todo