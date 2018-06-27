import React, { Component } from 'react'

import { List, Map } from 'immutable'

class ImmutableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            immuStore: Map({count: 0, list: List([])})
        }
    }
    handleAddCount = () => {
        console.log(this.state.immuStore)
        this.setState(({immuStore}) => ({
            immuStore: immuStore.update('count', value => value + 1)
        }))
    }
    handleSaveCount = () => {
        this.setState(({immuStore}) => ({
            immuStore: immuStore.update('list', list => list.push(this.state.immuStore.get('count')))
        }))
    }
    genUuid() {
        return Math.random()
                .toString()
                .slice(2)
    }
    render() {
        const immuStore = this.state.immuStore
        return (
            <div>
                <button onClick={this.handleAddCount}>Add Count</button>
                <button onClick={this.handleSaveCount}>Save Count</button>
                <div>The Count is: {immuStore.get('count')}</div>
                The Saved Count List is:
                <ul>
                    {
                        immuStore.get('list').map((item, index) => {
                            return <li key={this.genUuid()}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ImmutableComponent
