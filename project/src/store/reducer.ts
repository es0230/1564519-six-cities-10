import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { cityChange, offerListFilling } from './action';

const initialState = {
  city: 'Amsterdam',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offerListFilling, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
