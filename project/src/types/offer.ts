import { Owner } from './owner';
import { Review } from './review';
import type { Coordinates } from './coordinates';

export type Offer = {
  id: number;
  rating: number;
  price: number;
  bedroomCount: number;
  guestLimit: number;
  city: string;
  title: string;
  description: string;
  placeType: string;
  images: string[];
  features: string[];
  isFavorite: boolean;
  isPremium: boolean;
  ownerInfo: Owner;
  coordinates: Coordinates;
  placeReviews: Review[];
}


