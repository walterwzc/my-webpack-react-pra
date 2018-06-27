import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PostList from './PostList'

class Posts extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    constructor(props, context) {
        super(props)
        this.store = context.store
        this.state = {
            commentInput: ''
        }
        this.store.subscribe(() => {
            this.forceUpdate()
        })
    }
    genUuid = () => {
        return Math.random()
                    .toString(34)
                    .slice(2)
    }
    commentInputChange = e => {
        console.log('commentInputChange')
        this.setState({
            commentInput: e.target.value
        })
    }
    addComment = () => {
        console.log('addComment')
        this.store.dispatch({
            type: 'ADD',
            payload: {id: this.genUuid(), comment: this.state.commentInput}
        })
    }
    render() {
        console.log('Posts -> render')
        console.log(this.store.getState())
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.commentInput}
                        onChange={this.commentInputChange}
                    />
                    <button 
                        onClick={this.addComment}
                        style={{width: 60, height: 25, marginLeft: 10}}
                    >增加</button>
                </div>
                <PostList list={this.store.getState()}/>
            </div>
        )
    }
}

export default Posts
