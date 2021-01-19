import { Action, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit"
import State from "./state";

const asyncTest = (): ThunkAction<void, State, {}, Action> =>
    (dispatch: ThunkDispatch<State, {}, Action>) => {
        new Promise<{ dispatch: ThunkDispatch<State, {}, Action> }>((res) => {
            setTimeout(() => {
                console.log("async call")
                res({ dispatch })
            }, 1000)
        })
            .then(({ dispatch: dis }) => {
                console.log("call dispatch")
                dis({
                    type: "TEST"
                })
            })
    };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    asyncTest
}