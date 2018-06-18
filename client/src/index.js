import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app';
import store from './reducers';

import itemsList from '../../items.json';
import { addItem } from './actions/itemsChange';
import { changeTotal } from './actions/totalChange';

for (var i = 0; i < itemsList.length; i++) {
    var quantity = localStorage.getItem(itemsList[i].itemid);
    if (quantity) {
        itemsList[i].quantity = JSON.parse(quantity);
    }
    store.dispatch(addItem(itemsList[i]));
    store.dispatch(changeTotal('inc', itemsList[i].quantity * itemsList[i].price));
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