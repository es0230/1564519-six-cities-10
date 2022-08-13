import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getCurrentCity = (state: State): string => state[NameSpace.Data].city;
export const getFavoriteOffersCount = (state: State): number => state[NameSpace.Data].offers.filter((offer) => offer.isFavorite).length;
//export const getLocalOffers = (state: State): Offer[] => state[NameSpace.Data].offers.filter((offer))
