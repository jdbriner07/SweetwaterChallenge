const items = function(state={}, action) {
    if (action.type === 'add_item') {
        return Object.assign({}, state, {[action.payload.itemid]: action.payload})
    } else if (action.type === 'remove_item') {
        var result = Object.assign({}, state);
        delete result[action.payload]
        localStorage.setItem(action.payload, 0);
        return result;
    }else if (action.type === 'inc_quantity') {
        localStorage.setItem(action.payload, state[action.payload].quantity + 1);
        var item = Object.assign({}, state[action.payload], {quantity: state[action.payload].quantity+1})
        return Object.assign({}, state, {[action.payload]: item})
    } else if (action.type === 'dec_quantity') {
        localStorage.setItem(action.payload, state[action.payload].quantity - 1);
        var item = Object.assign({}, state[action.payload], {quantity: state[action.payload].quantity-1})
        return Object.assign({}, state, {[action.payload]: item})
    }
    return state;
}

export default items;