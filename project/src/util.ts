import { Offer } from './types/offer';

export const getOfferCoordinates = (offer: Offer): [number, number] => [offer.location.latitude, offer.location.longitude];
