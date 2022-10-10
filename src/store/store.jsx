import { createStore } from "redux";
import { friendsReducer } from "./reducer/reducer"
import { combineReducers } from "redux";

const storeReducer = combineReducers({
    friendsReducer,
});

export const store = createStore(storeReducer);