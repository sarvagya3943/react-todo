import React , { Component } from 'react' 

class AddTodo extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            text : ''
        }
        this.handleTextChange = this.handleTextChange.bind(this) ;
        this.handleSubmit = this.handleSubmit.bind(this) ;
    }
    handleTextChange(event) {
        this.setState({text : event.target.value}) ;
    }
    handleSubmit(event) {
        this.props.addTodo(this.state.text) ;
        event.preventDefault() ;
        this.setState({text : ''})
    }
    render() {
        return (
            <div>
                <form className="add-todo" onSubmit={this.handleSubmit}>
                    <input className="add-todo__input" type="text" value={this.state.text} onChange={this.handleTextChange} />
                    <button className="add-todo__btn" type="submit"><i className="fa fa-plus">+</i></button>
                </form>
            </div>
        )
    }
}



export default AddTodo