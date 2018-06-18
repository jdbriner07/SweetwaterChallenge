import React from 'react';

import Cart from './cart';
import TotalDisplay from './totalDisplay';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Sweetwater Shopping Cart</h1>
                <Cart /> 
                <TotalDisplay />
            </div>
        )
    }
}

export default App