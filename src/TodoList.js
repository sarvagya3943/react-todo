import React , { Component } from 'react' 

class TodoList extends Component {
    delete(index) {
        this.props.clickHandler(index) ;
    }
    render() {
        let todoList = this.props.todos.map((elem , index) => {
            return <li className="todo" key={index} onClick={() => this.delete(index)}>{elem}</li>
        })
        return(
            <ul className="todo-list">{todoList}</ul>
        )
    }
}

export default TodoList