export function changeTotal(type, cost) {
    return {
        type: (type === 'dec' ? 'dec_total' : 'inc_total'),
        payload: cost
    }
} 