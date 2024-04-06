import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addToBasket: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index >= 0) {
                state.items.splice(index, 1);
            } else {
                console.warn("Can't remove product (id: " + action.payload.id + ") as it's not in the basket!");
            }
        }
    }
})

export const selectBasketItems = state => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(item => item.id === id);

export const selectBasketTotal = state => state.basket.items.reduce((accu, item) => accu += item.price, 0);

export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer;
  