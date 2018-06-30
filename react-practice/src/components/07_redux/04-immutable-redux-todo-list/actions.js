const genUuid = () => {
    return Math.random()
            .toString(34)
            .slice(2)
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
    // console.log(id)
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}
