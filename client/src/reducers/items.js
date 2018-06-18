const items = function(state={}, action) {
    if (action.type === 'add_item') {
        return Object.assign({}, state, {[action.payload.itemid]: action.payload})
    } else if (action.type === 'remove_item') {
        return Object.assign({}, state, {[action.payload]: undefined})
    }else if (action.type === 'inc_quantity') {
        var item = object.assign({}, state[action.payload], {quantity: state[action.payload].quantity++})
        return Object.assign({}, state, {[action.payload]: item})
    } else if (action.type === 'dec_quantity') {
        var item = object.assign({}, state[action.payload], {quantity: state[action.payload].quantity--})
        return Object.assign({}, state, {[action.payload]: item})
    }
    return state;
}

export default items;