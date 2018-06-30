import React from 'react'

export function Todo (props) {
    const { todo } = props
    if (todo.isDone) {
        return <strike>{todo.text}</strike>
    } else {
        return <span>{todo.text}</span>
    }
}

export function TodoList (prosp) {
    const { todos, addTodo, toggleTodo, deleteTodo } = prosp

    const submitTodo = (event) => {
        const input = event.target
        const text = input.value
        const isEnter = event.which === 13
        const isLongEnough = text.length > 0
        if ( isEnter && isLongEnough ) {
            input.value = ''
            addTodo(text)
        }
    }

    const toggleClick = id => event => toggleTodo(id)

    const deleteClick = id => event => deleteTodo(id)

    return (
        <div className="todo">
            <input
                type="text"
                className="todo__input"
                onKeyDown={submitTodo}
            />
            <ul>
                {todos.map(item => (
                    <li
                        key={item.get('id')}
                        onClick={toggleClick(item.get('id'))}
                        className="todo__item"
                    >
                        <Todo todo={item.toJS()}/>
                        <button
                            className="todo_delete_button"
                            onClick={deleteClick(item.get('id'))}
                        >DELETE</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
