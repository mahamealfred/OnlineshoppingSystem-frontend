import { createStore, applyMiddleware ,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import allReducers from './reducers';
import { cartReducer } from './reducers/cartReducer';


const reducer =combineReducers({
    cart:cartReducer,
});

const middleware = applyMiddleware(thunk, promise); // inside the function we will add middleware

const store = createStore(allReducers, {}, 
    composeWithDevTools(middleware));

export default store;