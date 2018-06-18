const items = function(state={items:{}}, action) {
    if (action.type = 'add_item') {
        return object.assign({}, state, {[action.item.itemid]: action.item})
    } else if (action.type = 'inc_quantity') {
        var item = object.assign({}, state[action.itemid], {quantity: state[action.itemid].quantity++})
        return object.assign({}, state, {[action.itemid]: item})
    } else if (action.type = 'dec_quantity') {
        var item = object.assign({}, state[action.itemid], {quantity: state[action.itemid].quantity--})
        return object.assign({}, state, {[action.itemid]: item})
    }
    return state;
}

export default items;