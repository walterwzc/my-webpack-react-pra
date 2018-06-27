export default (state = [{id: 1, title: 'Init'}], action) => {
    console.log('in reducer')
    switch(action.type) {
        case 'LOADING':
            return [{id: 2, title: 'Loading, Please Wait'}]
        case 'GOT':
            return [...action.payload]
        default:
            return state
    }
}