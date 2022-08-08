import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const cityChange = createAction<string>('main/cityChange');

export const offerListFilling = createAction<Offer[]>('main/offerListFilling');
