import { connect } from 'react-redux'

import { addTodo, deleteTodo, toggleTodo } from './actions'
import * as components from './components'

import './styles/style.css'

function mapStateToProps (state) {
    return {
        todos: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addTodo: text => dispatch(addTodo(text)),
        toggleTodo: id => dispatch(toggleTodo(id)),
        deleteTodo: id => dispatch(deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(components.TodoList)
