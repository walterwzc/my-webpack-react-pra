import { List, Map } from 'immutable'

export default (state = List([]), action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.push(Map(action.payload))
        case 'TOGGLE_TODO':
            return state.map(item => {
                if (item.get('id') === action.payload) {
                    return item.update('isDone', isDone => !isDone)
                } else {
                    return item
                }
            })
        case 'DELETE_TODO':
            return  state.filter(item => item.get('id') !== action.payload)
        default:
            return state
    }
}
