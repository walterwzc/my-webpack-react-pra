import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        store.subscribe(() => {
            this.forceUpdate()
        })
    }
    fetchData() {
        console.log('fetchData')
        return (dispatch, getState) => {
            fetch('/api/v2/movie/top250')
                .then(response => response.json())
                .then(result => {
                    dispatch({
                        type: 'GOT',
                        payload: result.subjects
                    })
                })
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        store.dispatch({
            type: 'LOADING'
        })
        store.dispatch(
            this.fetchData()
        )
    }
    render() {
        console.log('render')
        console.log(store.getState())
        return (
            <ul>
                {store.getState().map((item, index) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        )
    }
}

export default App
