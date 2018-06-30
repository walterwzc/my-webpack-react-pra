import React from 'react'
import ReactDOM from 'react-dom'

// 样式：
// import './styles/app.scss'

// import App from './components/01.css_module';

// import App from './components/02.children';

// import App from "./components/03.opacity_change";

// import App from './components/04_01.pure_render/App'

// import App from './components/06_immutable_data/01.Simple_Immutable'

// import App from './components/06_immutable_my_practise/01.MySimple'

// import App from './components/07_redux/01counter/App'

// import App from './components/07_redux/02middleware/App'

// import App from './components/07_redux/03react-redux-todo-list/App'

// import App from './components/07_redux/04-immutable-redux-todo-list/index'

import App from './components/07_redux/03-2-immutable-redux-todo-list-refactor/index'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducer from 07-03
// import reducer from './components/07_redux/03react-redux-todo-list/store/reducer'

// REDUCER FROM 07-03-2
import reducer from './components/07_redux/03-2-immutable-redux-todo-list-refactor/reducer'


// reducer from 07-04
// import reducer from './components/07_redux/04-immutable-redux-todo-list/reducer'

const store = createStore(reducer, applyMiddleware(thunk))

const el = document.getElementById('app')

const render = () => {
    return ReactDOM.render(
        // 02.children
        // <App>
        //     <span>Hello</span>
        //     <span>List</span>
        // </App>,
        <Provider store={store}>
            <App/>
        </Provider>,
        el
    )
}

render()
