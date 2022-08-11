import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

export const cityChange = createAction<string>('main/cityChange');

export const offerListFilling = createAction<Offer[]>('main/offerListFilling');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setActiveUser = createAction<string | null>('user/setActiveUser');
