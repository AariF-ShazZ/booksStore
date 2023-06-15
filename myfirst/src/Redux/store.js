import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import { reducer as AppData } from "./AppReducer/reducer"
import { reducer as AuthData } from "./AuthReducer/reducer"
const rootReducer = combineReducers({AppData,AuthData})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
export {store} 