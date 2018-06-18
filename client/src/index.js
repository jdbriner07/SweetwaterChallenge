import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './component/app';
import store from './reducers';

import itemsList from '../items.json';
import { addItem } from './actions.itemsChange';

for (var i = 0; i < itemsList.length; i++) {
    store.dispatch(addItem(itemsList(i)));
    // increase the total by quantity*price
}

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));