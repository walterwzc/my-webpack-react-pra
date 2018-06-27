import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.props.store.subscribe(() => {
            console.log('store change, trigger forceUpdate')
            this.forceUpdate()
        })
    }
    add = () => {
        console.log('add')
        this.props.store.dispatch({
            type: 'INCREMENT'
        })
    }
    minus = () => {
        console.log('minus')
        this.props.store.dispatch({
            type: 'DECREMENT'
        })
    }
    render() {
        return (
            <div style={{width: 300, height: 200, marginLeft: 10, backgroundColor: 'yellow'}}>
                <button onClick={this.add}>Add</button>{'  '}
                <button onClick={this.minus}>Minus</button>
                <p>the Counter in store is:</p>
                <div>{this.props.store.getState()}</div>
            </div>
        )
    }
}

export default Counter
