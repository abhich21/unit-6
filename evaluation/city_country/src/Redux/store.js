import { createStore,applyMiddleware } from "redux";
import { reducer } from "./city/reducer";

export const store = createStore(reducer, applyMiddleware(thunk));