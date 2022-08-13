import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import { fetchOffersAction } from '../api-actions';

const initialState: AppData = {
  offers: [],
  city: 'Paris',
  isDataLoaded: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    cityChange: (state, action) => {
      state.city = action.payload;
    },
    toggleIsFavoriteCard: (state, action) => {
      const toggledOffer = state.offers.find((offer) => action.payload.id === offer.id);
      if (toggledOffer) {
        toggledOffer.isFavorite = action.payload.newIsFavorite;
      }
    },
    offerListFilling: (state, action) => {
      state.offers = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      });
  }
});

export const { cityChange, toggleIsFavoriteCard, offerListFilling, loadOffers } = appData.actions;
