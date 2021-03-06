import { List, Map } from 'immutable'

export default (state = List([]), action) => {
    switch(action.type) {
        case 'ADD_TODO':
            // console.log('ADD_TODO')
            return state.push(Map(action.payload))
        case 'TOGGLE_TODO':
            // console.log('TOGGLE_TODO')
            return state.map(item => {
                if (item.get('id') === action.payload) {
                    return item.update('isDone', isDone => !isDone)
                } else {
                    return item
                }
            })
        default:
            return state
    }
}
