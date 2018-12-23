export default (counter = 0, action) => {
    const {type} = action
    switch(type) {
        case 'INCREMENT': return counter +1
        default: return counter
    }
}