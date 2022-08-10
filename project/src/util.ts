import { Offer } from './types/offer';

export const getOfferCoordinates = (offer: Offer): [number, number] => [offer.city.location.latitude, offer.city.location.longitude];
