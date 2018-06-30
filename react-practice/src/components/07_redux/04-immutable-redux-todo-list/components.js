import React from 'react'

// import './styles/style.css'

export function Todo(props) {
    const { todo } = props
    if (todo.isDone) {
        return <strike>{todo.text}</strike>
    } else {
        return <span>{todo.text}</span>
    }
}

export function TodoList(props) {
    const { todos, addTodo, toggleTodo } = props

    const onSubmit = event => {
        const input = event.target
        const text = input.value
        const isEnterKey = event.which === 13
        const isLongEnough = text.length > 0

        if (isEnterKey && isLongEnough) {
            input.value = ''
            addTodo(text)
        }
    }

    const toggleClick = id => event => toggleTodo(id)

    return (
        <div className="todo">
            <input
                type="text"
                className="todo__input"
                onKeyDown={onSubmit}
                placeholder="Add todo"
            />
            <ul>
                {todos.map(item => {
                    // console.log(item.get('id'))
                    return (
                        <li
                            key={item.get('id')}
                            className="todo__item"
                            onClick={toggleClick(item.get('id'))}
                        >
                            <Todo todo={item.toJS()} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
