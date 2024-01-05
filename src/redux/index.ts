import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import countReducer from "./count";

export const rootReducer = combineReducers({
    count: countReducer
})

const wrapperReducer = (state: ReturnType<typeof rootReducer>, action: AnyAction) => {
    if(action.type === HYDRATE){
        const nextState = {...state, ...action.payload};
        return nextState;
    } else {
        return rootReducer(state, action);
    }
}

const store = () => configureStore({reducer: wrapperReducer});
export const wrapper = createWrapper(store);

const storeType = configureStore({reducer: rootReducer});
export type RootState = ReturnType<typeof storeType.getState>
export type AppDispatch = typeof storeType.dispatch;