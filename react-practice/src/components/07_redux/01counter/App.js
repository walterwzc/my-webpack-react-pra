import React, { Component } from 'react'
import {createStore} from 'redux'

import Counter from './Counter'
import reducers from './reducers'

const store = createStore(reducers)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <Counter store={store}/>
    }
}

export default App
