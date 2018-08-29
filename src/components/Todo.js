import React from 'react'

const Todo = ({ onClick , completed , text }) => (
    <li className="list-item" style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}>
        {text}
        <button className="btn" id="toggleButton" onClick={onClick}>Toggle</button>
    </li>
) ;

export default Todo ;
