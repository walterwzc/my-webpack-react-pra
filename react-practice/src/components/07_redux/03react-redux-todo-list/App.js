import React, { Component } from 'react'

import Posts from './Posts'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h3>To do List:</h3>
                <Posts />
            </div>
        )
    }
}

export default App
