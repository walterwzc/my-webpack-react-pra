export default (state = [], action) => {
    // console.log('reducer -> action:')
    // console.log(action)
    switch (action.type) {
        case 'ADD':
            // console.log('case ADD')
            return [...state, {...action.payload, ...{status: action.status}}]
        case 'DELETE':
            // console.log('case DELETE')
            return state.filter((item) => {
                return item.id !== action.id
            })
        case 'CHANGE_STATUS':
            // console.log('CHANGE_STATUS')
            for (let index = 0; index < state.length; index++) {
                if (state[index].id === action.id) {
                    state[index].status = !state[index].status
                    break
                }
            }
            // console.log('new state:')
            // console.log(state)
            return state
        default:
            return state
    }
}
