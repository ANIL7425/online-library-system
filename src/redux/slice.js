import { createSlice } from "@reduxjs/toolkit";
import initialState from "./intialState";

const booksSlice = createSlice(
    {
        name:"books",
        initialState,
        reducers:{
            addBook: (state, action) => {
                state.books.push(action.payload);
              },
        }

        
    });
    export const {addBook} =booksSlice.actions;
    export default booksSlice.reducer;