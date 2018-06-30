function genUuid () {
    return Math.random()
            .toString(34)
            .slice(3)
}

export function addTodo (text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: genUuid(),
            isDone: false,
            text: text
        }
    }
}

export function toggleTodo (id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}

export function deleteTodo (id) {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}
