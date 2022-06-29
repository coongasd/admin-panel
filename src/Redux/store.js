import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from './Reducer/ProductReducers';
import { userListReducer } from './Reducer/UserReducer';
import { orderDetailsReducer, orderListReducer } from './Reducer/OrderReducer';

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    userList : userListReducer,
    orderList : orderListReducer,
    orderDetail:orderDetailsReducer
});
const middleware = [thunk];
const initialState = {
    
}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;