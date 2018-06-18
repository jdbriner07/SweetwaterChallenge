const total = function(state=0, action) {
    if (action.type === 'inc_total') {
        return (state += action.payload)
    } else if (action.type === 'dec_total') {        
        return (state -= action.payload)
    }
    return state
}

export default total;