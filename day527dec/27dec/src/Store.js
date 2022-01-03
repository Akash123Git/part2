import { combineReducers, createStore } from "redux";

import CartReducer from "./reducers/CartReducer";
import filterReducer from "./reducers/FilterReducer"

var store = createStore(combineReducers({ carts: CartReducer, filter: filterReducer }, {
    carts: [], filter: {
        category: undefined,
        company: undefined,
        price: undefined
    }
}))

export default store;