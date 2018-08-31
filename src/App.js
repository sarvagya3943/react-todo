import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            todos : []
        }
        this.addItem = this.addItem.bind(this) ;
        this.clickHandler = this.clickHandler.bind(this) ;
    }
    addItem(text) {
        if(text.trim() === '') return ;
        this.setState(prevState => {
            return {
                todos : [...prevState.todos , text.trim()]
            }
        });
    }
    clickHandler(index) {
        this.setState(prevState => {
            let newState = {...prevState} ;
            newState.todos.splice(index , 1) ;
            return newState ;
        })
    }
    render() {
        return (
            <div className="app">
                <h1 className="title">Todos</h1>
                <TodoList clickHandler = {this.clickHandler} todos={this.state.todos}/>
                <AddTodo addTodo={this.addItem} />
            </div>
        )
    }
}

export default App