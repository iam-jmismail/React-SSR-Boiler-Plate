import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';

const preloadedState = {};
const middleware = [thunk];

const store = createStore(rootReducer, preloadedState, composeWithDevTools(
    applyMiddleware(...middleware),
));

export default store;
