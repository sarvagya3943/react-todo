import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../components/style.css'

const App = ({ match }) => (
    <div id="main-div">
        <AddTodo />
        <VisibleTodoList filter={match.params.filter || 'SHOW_ALL'} />
        <Footer />
    </div>
);

export default App ;
