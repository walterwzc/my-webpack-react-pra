import React, { Component } from 'react'
import { Map, List } from 'immutable'

class ImmutableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Map({ count: 0, items: List() })
        }
    }
    handleCountClick = () => {
        this.setState(({ data }) => ({
            data: data.update('count', v => v + 1)
        }))
    }

    handleAddItemClick = () => {
        this.setState(({ data }) => ({
            data: data.update('items', list => list.push(data.get('count')))
        }))
    }

    genUuid = () => {
        return Math.random()
                .toString(34)
                .slice(2)
    }
    
    render() {
        var data = this.state.data
        return (
            <div>
                <button onClick={this.handleCountClick}>Add to count</button>
                <button onClick={this.handleAddItemClick}>Save count</button>
                <div>Count: {data.get('count')}</div>
                Saved counts:
                <ul>{data.get('items').map(item => <li key={this.genUuid()}>Saved: {item}</li>)}</ul>
            </div>
        )
    }
}

export default ImmutableComponent
