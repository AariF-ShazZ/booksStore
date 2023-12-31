import * as types from "./actionsTypes"

const initialState = {
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false
}

export const reducer = (state = initialState, action) => {
    const   {type, payload} =action
    switch(type){
        case types.USER_LOGIN_REQUEST: {
            return {
                ...state,isAuthLoading:true
            }
        }
        case types.USER_LOGIN_SUCCESS: {
            return {
                ...state,isAuthLoading:false,token:payload,isAuth:true
            }
        }
        case types.USER_LOGIN_ERROR: {
            return {
                ...state,isAuthLoading:false,isAuthError:true
            }
        }
        default : return state
    }
}