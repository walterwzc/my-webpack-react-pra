import React from 'react'
import ReactDOM from 'react-dom'

import './styles/app.scss'

// import App from './components/01.css_module';

// import App from './components/02.children';

// import App from "./components/03.opacity_change";

// import App from './components/04_01.pure_render/App'

// import App from './components/06_immutable_data/01.Simple_Immutable'

// import App from './components/06_immutable_my_practise/01.MySimple'

// import App from './components/07_redux/01counter/App'

// import App from './components/07_redux/02middleware/App'

import App from './components/07_redux/03react-redux-todo-list/App'


import { Provider } from 'react-redux'

import { createStore } from 'redux'
import reducer from './components/07_redux/03react-redux-todo-list/store/reducer'
const store = createStore(reducer)

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
