import React from 'react'

export function Todo(props) {
    const {todo} = props
    if (todo.isDone) {
        return <strike>{todo.text}</strike>
    } else {
        return <span>{todo.text}</span>
    }
}

export function TodoList(props) {
    const { todos, addTodo, toggleTodo } = props
    const submitInput = event => {
        const input = event.target
        const text = input.value
        const isEnter = event.which === 13
        const isLongEnough = text.length > 0

        if (isEnter && isLongEnough) {
            input.value = ''
            addTodo(text)
        }
    }
    
    const toggleClick = id => event => toggleTodo(id)

    return (
        <div className="todo">
            <input
                type="text"
                onKeyDown={submitInput}
                className="todo__input"
            />
            <ul>
                {todos.map(item => (
                    <li
                        key={item.get('id')}
                        className="todo__item"
                        onClick={toggleClick(item.get('id'))}
                    >
                        <Todo todo={item.toJS()}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
