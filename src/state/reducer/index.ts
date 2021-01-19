// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import * as H from "history";

const createRootReducer = (history: H.History) => combineReducers({
    router: connectRouter(history),
})
export default createRootReducer