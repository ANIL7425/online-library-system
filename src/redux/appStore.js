import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slice";
const appStore=configureStore({
    reducer:{
        books:booksReducer

    }
})
export default appStore;