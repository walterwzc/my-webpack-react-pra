export default (state = [], action) => {
    console.log('reducer -> action:')
    console.log(action)
    switch (action.type) {
        case 'ADD':
            console.log('case ADD')
            return [...state, action.payload]
        case 'DELETE':
            console.log('case DELETE')
            return state.payload.filter((item) => {
                return item.id !== action.id
            })
        default:
            return state
    }
}