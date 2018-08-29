import React from 'react'
import Todo from '../components/Todo'

const TodoList = ({ todos , toggleTodo }) => (
    <ul className="todo-list">
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
        ))}
    </ul>
);

export default TodoList ;
