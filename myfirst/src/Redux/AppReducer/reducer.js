import * as types from "./actionsTypes"

const initialState = {
    books:[],
    isLoading:false,
    isError:false
}

export const reducer = (state = initialState, action) => {
    const   {type, payload} =action
    switch(type){
        case types.GET_BOOKS_REQUEST: {
            return {
                ...state,isLoading:true
            }
        }
        case types.GET_BOOKS_SUCCESS: {
            return {
                ...state,isLoading:false,books:payload
            }
        }
        case types.GET_BOOKS_ERROR: {
            return {
                ...state,isLoading:false,isError:true
            }
        }
        default : return state
    }
}