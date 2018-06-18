const total = function(state={total: 0}, action) {
    if (action.type = 'inc_total') {
        return {total: (state.total += action.cost)}
    } else if (action.type = 'dec_total') {        
        return {total: (state.total -= action.cost)}
    }
    return state
}

export default total;