import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialProductSlice = {
    allProducts: [],
    cart: []
}

const productsSlice = createSlice ({
    name: 'audioProducts', 
    initialState: intialProductSlice,
    reducers: {
        allProducts(state, action) {
            state.allProducts = action.payload
        }
    }
})

export const productsAction = productsSlice.actions

const store = configureStore({reducer: productsSlice.reducer})

export default store