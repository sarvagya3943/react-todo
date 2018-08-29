import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../components/style.css'

const App = () => (
    <div id="main-div">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App ;
