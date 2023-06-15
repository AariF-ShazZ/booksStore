import * as types from  "./actionsTypes"
import axios from "axios"
const getBookRequest = () => {
    return {
        type:types.GET_BOOKS_REQUEST
    }
}
const getBookSuccess = (payload) => {
    return {
        type:types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBookError = () => {
    return {
        type:types.GET_BOOKS_ERROR
    }
}

export const getBooks = (params) => (dispatch) => {
    console.log(params);
    dispatch(getBookRequest())
    return axios.get("http://localhost:8000/books",params)
    .then((res) => dispatch(getBookSuccess(res.data)))
    .catch((err) => dispatch(getBookError()))
}

