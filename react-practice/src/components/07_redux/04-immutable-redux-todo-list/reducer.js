import { Map, List } from 'immutable'

const init = List([])

export default function reducer (todos = init, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return todos.push(Map(action.payload))
        case 'TOGGLE_TODO':
            // console.log('TOGGLE_TODO')
            return todos.map(item => {
                // console.log(item.get('id'), action.payload)
                if (item.get('id') == action.payload) {
                    return item.update('isDone', isDone => !isDone)
                } else {
                    return item
                }
            })
        default:
            return todos
    }
}
