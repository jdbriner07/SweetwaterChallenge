const total = function(state={total: 0}, action) {
    if (action.type === 'inc_total') {
        return {total: (state.total += action.payload)}
    } else if (action.type === 'dec_total') {        
        return {total: (state.total -= action.payload)}
    }
    return state
}

export default total;