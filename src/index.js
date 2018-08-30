import ReactDOM from 'react-dom'
import React from 'react'
import todoApp from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import { BrowserRouter as Router , Route } from 'react-router-dom'

const store = createStore(todoApp) ;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider> ,
    document.getElementById('root')
);
