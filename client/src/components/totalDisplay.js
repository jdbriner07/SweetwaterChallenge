import React from 'react';
import { connect } from 'react-redux';

import '../styles.css';

class TotalDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="total-price">
                Your Total is: ${this.props.total}
            </div>
        )
    }
}

export default connect((state) => {
    return {total: state.total}
})(TotalDisplay)