import { connect } from 'react-redux'

import * as components from './components'
import { addTodo, toggleTodo } from './actions'

import './styles/style.css'

function mapStateToProps (state) {
    return {
        todos: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addTodo: text => dispatch(addTodo(text)),
        toggleTodo: id => {
            // console.log(toggleTodo(id))
            return dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(components.TodoList)

