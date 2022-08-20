import { Offer } from './types/offer';
import { Review } from './types/review';

export const getOfferCoordinates = (offer: Offer): [number, number] => [offer.location.latitude, offer.location.longitude];

export const sortReviewsByDate = (reviews: Review[]): Review[] => reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export const getWidthFromRating = (rating: number) => rating * 20;
