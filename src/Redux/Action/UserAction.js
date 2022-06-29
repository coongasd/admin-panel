import axios from "axios";
import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../Constants/UserConstants";

export const listUser = () => async (dispatch,getState) => {
    try {
        dispatch({type: USER_LIST_REQUEST})
        
    
        const{data} = await axios.get(`http://localhost:5000/api/users`);
        dispatch({ type:USER_LIST_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message
            : error.message
        });
    }
}
