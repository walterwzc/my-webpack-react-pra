import React, { Component } from 'react'

import { Map as ImmuMap, List as ImmuList } from 'immutable'

class ImmutableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            immuStore: ImmuMap({ count: 0, savedList: ImmuList([]) })
        }
    }
    handleAddCount = () => {
        this.setState(({immuStore}) => ({
            immuStore: immuStore.update('count', value => value + 1)
        }))
    }
    handleSaveCountToList = () => {
        this.setState(({immuStore}) => ({
            immuStore: immuStore.update('savedList', list => list.push(immuStore.get('count')))
        }))
    }
    genUuid() {
        return Math.random()
                .toString(34)
                .slice(2)
    }
    render() {
        const immuStore = this.state.immuStore
        console.log(immuStore)
        return (
            <div>
                <button onClick={this.handleAddCount}>Count增加</button>
                <button onClick={this.handleSaveCountToList}>保存Count</button>
                Count的值是：{immuStore.get('count')}<br/>
                ImmuList:
                <ul>
                    {immuStore.get('savedList').map(item => {
                        return <li key={this.genUuid()}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ImmutableComponent
