import { ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "../Constants/OrderConstant";

export const orderListReducer = (state = {orders: []}, action) =>
{
    switch(action.type){
        case ORDER_LIST_REQUEST:
        return {loading:true};
        case ORDER_LIST_SUCCESS:
            return{loading: false, orders: action.payload};
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload};
        default:
            return state;
    }
}   

export const orderDetailsReducer = (state = {loading: true, user : {},orderItems:[],shippingAddress:{}} , action) =>
{
    switch(action.type){
        case ORDER_DETAIL_REQUEST:
            return {...state,loading:true};
        case ORDER_DETAIL_SUCCESS:
            return{loading: false, order: action.payload};
        case ORDER_DETAIL_FAIL:
            return { loading: false, error: action.payload}; 
        default:
            return state;
    }
}   