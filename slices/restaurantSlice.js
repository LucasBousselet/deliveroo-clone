import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        restaurant: {
            id: null,
            imgUrl: null,
            title: null,
            rating: null,
            genre: null,
            address: null,
            short_description: null,
            dishes: null,
            long: null,
            lat: null
        }
    },
    reducers: {
        setRestaurant: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.restaurant = action.payload;
        },
    }
})

export const selectRestaurant = state => state.restaurant.restaurant;

export const { setRestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer;
  