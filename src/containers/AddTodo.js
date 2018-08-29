import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

const AddTodo = ({ dispatch }) => {
    let input ;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault() ;
                console.log(input.value) ;
                if(!input.value.trim()) return ;
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                <input ref={node => input = node} />
                <button className="btn"
                type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo) ;
