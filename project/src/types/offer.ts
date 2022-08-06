import { Owner } from './owner';
import { Review } from './review';
import { Point } from './point';

export type Offer = {
  id: number;
  rating: number;
  price: number;
  bedroomCount: number;
  guestLimit: number;
  title: string;
  description: string;
  placeType: string;
  images: string[];
  features: string[];
  isFavorite: boolean;
  isPremium: boolean;
  ownerInfo: Owner;
  location: Point;
  placeReviews: Review[];
}


