import React from 'react';
import { connect } from 'react-redux';
import '../styles.css';

import CartEntry from './cartEntry';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cart">
                {Object.entries(this.props.items).map((item, i) => {
                    return <CartEntry id={item[0]} item={item[1]} index={i} />
                })}
            </div>
        )
    }
}

export default connect((state) => {
    return {items: state.items}
})(Cart)