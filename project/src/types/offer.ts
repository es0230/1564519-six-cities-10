import { Owner } from './owner';
import { Review } from './review';

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
  location: string[];
  placeReviews: Review[];
}


