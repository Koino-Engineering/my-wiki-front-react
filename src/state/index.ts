import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware, RouterState } from "connected-react-router";
import * as H from "history";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducer";

export const history = createBrowserHistory();

export const StoreConfiguration = (history: H.History) => {
    return configureStore({
        reducer: createRootReducer(history),
        middleware: getDefaultMiddleware().concat([
            routerMiddleware(history),
        ]),
        devTools: process.env.NODE_ENV === "development",
    })
}


interface State {
    router: RouterState;
}

export default State;