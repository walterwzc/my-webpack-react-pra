import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

class PostList extends PureComponent {
    static contextTypes = {
        store: PropTypes.object
        // list: PropTypes.array.isRequired
    }
    constructor(props, context) {
        super(props)
        this.store = context.store
        this.state = {}
    }
    render() {
        console.log('PostList -> render')
        console.log(this.props.list)
        console.log('PostList -> getState')
        console.log(this.store.getState())
        return (
            <ul>
                {this.props.list.map((item) => {
                    return <li key={item.id}>{item.comment}</li>
                })}
            </ul>
        )
    }
}

export default PostList
