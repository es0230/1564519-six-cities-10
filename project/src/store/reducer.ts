import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { cityChange, loadOffers, offerListFilling, requireAuthorization, setActiveUser, setDataLoadedStatus } from './action';

type InitialState = {
  city: string,
  offers: Offer[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  user: string | null,
  //currentOffer: Offer | null,
  //nearbyOffers: Offer[],
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  user: null,
  //currentOffer: null,
  //nearbyOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offerListFilling, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setActiveUser, (state, action) => {
      state.user = action.payload;
      //})
      //.addCase(loadOffer, (state, action) => {
      //  state.currentOffer = action.payload;
      //})
      //.addCase(loadNearbyOffers, (state, action) => {
      //  state.nearbyOffers = action.payload;
    });
});

export { reducer };
