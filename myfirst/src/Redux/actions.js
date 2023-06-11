import * as types from  "./actionsTypes"

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

export const getBooks = () => (dispatch) => {
    dispatch(getBookRequest())
    return axios.get("http://localhost:8000/books")
    .then((res) => dispatch(getBookSuccess(res.data)))
    .catch((err) => dispatch(getBookError()))
}

