import React from 'react'
import ReactDOM from 'react-dom'

import './styles/app.scss'

// import App from './components/01.css_module';

// import App from './components/02.children';

// import App from "./components/03.opacity_change";

// import App from './components/04_01.pure_render/App'

// import App from './components/06_immutable_data/01.Simple_Immutable'

import App from './components/06_immutable_my_practise/01.MySimple'

const el = document.getElementById('app')

const render = () => {
    return ReactDOM.render(
        // 02.children
        // <App>
        //     <span>Hello</span>
        //     <span>List</span>
        // </App>,
        <App message="From App" />,
        el
    )
}

render()
