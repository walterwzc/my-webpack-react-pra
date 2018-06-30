import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

class PostList extends Component {
    static contextTypes = {
        store: PropTypes.object
        // list: PropTypes.array.isRequired
    }
    constructor(props, context) {
        super(props)
        this.store = context.store
        this.state = {}
    }
    deleteTodoItem = todoId => {
        this.store.dispatch({
            type: 'DELETE',
            id: todoId
        })
    }
    changeTodoStatus = todoId => {
        this.store.dispatch({
            type: 'CHANGE_STATUS',
            id: todoId
        })
    }

    // 因为不能够切换 item 的状态而判断是否渲染，所以不能够写 shouldComponentUpdate
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.list.length === nextProps.list.length) {
    //         console.log('PostList -> shouldUpdate -> false')
    //         console.log(this.props.list, nextProps.list)
    //         console.log(this.props.list.length, nextProps.list.length)
    //         return false
    //     }
    //     console.log('PostList -> shouldUpdate -> true')
    //     return true
    // }
    render() {
        console.log('PostList -> render')
        return (
            <ul style={{ width: 400, marginTop: 20 }}>
                {this.props.list.map(item => {
                    let CommentContent = item.status ? (
                        <span>{item.comment}</span>
                    ) : (
                        <strong>
                            <strike>{item.comment}</strike>
                        </strong>
                    )
                    let liStyle = Object.assign({}, {
                        marginBottom: 10,
                        cursor: 'pointer'
                    }, item.status ? {background: '#FF6E1C'} : {background: '#f00'})
                    console.log('liStyle: ')
                    console.log(liStyle)
                    return (
                        <li
                            key={item.id}
                            style={liStyle}
                            onClick={() => {
                                this.changeTodoStatus(item.id)
                            }}
                        >
                            {CommentContent}
                            {'  '}
                            <button
                                style={{ float: 'right' }}
                                onClick={() => {
                                    this.deleteTodoItem(item.id)
                                }}
                            >
                                delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default PostList
