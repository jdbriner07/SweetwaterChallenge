import { applyMiddleware, createStore, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';

import items from './reducers/items';
import total from './reducers/total';

const middleware = applyMiddleware(createLogger());

const reducers = combineReducers({
    items: items,
    total: total
});

const store = createStore(reducers, middleware);

export default store;