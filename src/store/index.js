import { configureStore, createSlice } from "@reduxjs/toolkit";

const intialProductSlice = {
    cart: [],
}

const productsSlice = createSlice ({
    name: 'audioProducts', 
    initialState: intialProductSlice,
    reducers: {
        addToCart(state, action) {
            const exist = state.cart.find(el => el.id === action.payload.id)
            if(exist) {
                exist.quantity += 1
                exist.total = exist.quantity * exist.price
                return
            }
            action.payload.quantity = 1
            action.payload.total = action.payload.quantity * action.payload.price
            state.cart.push(action.payload)
        },

        increaseProductQuantity(state, action) {
           const itemToIncrease = state.cart.find(el => el.id === action.payload)
           if(itemToIncrease) {
            itemToIncrease.quantity += 1
            itemToIncrease.total = itemToIncrease.quantity * itemToIncrease.price
           }
        },

        decreaseProductQuantity(state, action) {
            const itemToDecrease = state.cart.find(el => el.id === action.payload)
            if(itemToDecrease && itemToDecrease.quantity === 1) {
                const itemIndex = state.cart.findIndex(el => el.id === action.payload)
                state.cart.splice(itemIndex, 1)
            }

            if(itemToDecrease) {
                itemToDecrease.quantity -= 1
                itemToDecrease.total = itemToDecrease.quantity * itemToDecrease.price
            }
        },
    }
})

export const productsAction = productsSlice.actions

const store = configureStore({reducer: productsSlice.reducer})

export default store