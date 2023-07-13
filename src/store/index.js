import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import product from "./product";

import reviewList from "./product/reviewList";
import shoppingCart from "./shoppingCart";
import categories from "./categories";
import productImages from './product/images/index';

const reducer = combineReducers({
    user,
    product,
    reviewList,
    shoppingCart,
    categories,
    productImages,
});

export default configureStore({
    reducer,
});