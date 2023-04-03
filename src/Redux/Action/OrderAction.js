import { ORDER_LIST_FAIL, ORDER_LIST_SUCCESS,ORDER_LIST_REQUEST,
    ORDER_DETAILS_FAIL, ORDER_DETAILS_SUCCESS,ORDER_DETAILS_REQUEST, ORDER_DETAIL_REQUEST, ORDER_DETAIL_FAIL, ORDER_DETAIL_SUCCESS } from "../Constants/OrderConstant.js"
import axios from "axios";


//danh sach tat ca sp
export const listOrder = () => async(dispatch) => {
    try {
        dispatch({type: ORDER_LIST_REQUEST})
        
        const{data} = await axios.get(`https://job-search-server.onrender.com/api/orders/all`);
        dispatch({ type:ORDER_LIST_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message
            : error.message
        });
    }
}

export const detailOrder = (id) => async(dispatch) => {
    try {
        dispatch({type: ORDER_DETAIL_REQUEST})
        
        const{data} = await axios.get(`https://job-search-server.onrender.com/api/orders/${id}`);
        dispatch({ type:ORDER_DETAIL_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({
            type: ORDER_DETAIL_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message
            : error.message
        });
    }
}