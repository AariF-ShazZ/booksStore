import * as types from  "./actionsTypes"
import axios from "axios"


export const login = (params) => (dispatch) => {
    console.log(params);
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",params)
    .then((res) =>{ 
        console.log(res);
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data.token})})
    .catch((err) => dispatch({type:types.USER_LOGIN_ERROR}))
}

