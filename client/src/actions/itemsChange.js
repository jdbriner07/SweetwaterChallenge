export function addItem(item) {
    return {
        type: 'add_item',
        payload: item
    }
}

export function removeItem(itemid) {
    return {
        type: 'remove_item',
        payload: itemid
    }
}

export function quantityChange(type, itemid) {
    return {
        type: (type === 'dec' ? 'dec_quantity' : 'inc_quantity'),
        payload: itemid
    }
}