import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import product from "./product";

import reviewList from "./product/reviewList";
import shoppingCart from "./shoppingCart";

const reducer = combineReducers({
    user,
    product,
    reviewList,
    shoppingCart,
});

export default configureStore({
    reducer,
});