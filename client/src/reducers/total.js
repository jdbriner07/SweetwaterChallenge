const total = function(state=0, action) {
    if (action.type === 'inc_total') {
        state += action.payload
        state = Math.round(state * 100)/100
        return state
    } else if (action.type === 'dec_total') {        
        state -= action.payload
        state = Math.round(state * 100)/100
        return state
    }
    return state
}

export default total;