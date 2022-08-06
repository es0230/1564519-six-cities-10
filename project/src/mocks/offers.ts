import { Offer } from '../types/offer';
import { Owner } from '../types/owner';
import { reviews } from './reviews';

const placeImages: string[] = [
  'https://n1s1.elle.ru/bd/95/aa/bd95aa2aa31f1b758f289e0865ca2f0e/728x485_1_c7b2ca58505c763cd041b424cdb73d2d@1880x1253_0xac120003_19658614751575881272.jpg',
  'https://media.admagazine.ru/photos/6140812b23f818f11295bf00/16:9/w_2560%2Cc_limit/MMI_6732%2520copy.jpg',
  'https://s0.rbk.ru/v6_top_pics/media/img/5/60/756281458904605.jpg',
  'https://cdn.esoft.digital/320240/cluster/photos/6a/4a/f609434b321a6bfeaae2f43650b286fc4f304a6a.jpeg',
];

const owner: Owner = {
  avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
  name: 'Meow Meow',
  isPro: true,
};

export const offers: Offer[] = [
  {
    id: 1,
    rating: 4.1,
    price: 45,
    bedroomCount: 2,
    guestLimit: 4,
    title: 'Apartment',
    description: 'Nice apartment, awesome walls',
    placeType: 'Apartment',
    images: placeImages,
    isFavorite: true,
    isPremium: false,
    ownerInfo: owner,
    placeReviews: [reviews[0], reviews[1]],
    location: { lat: 52.3909553943508, lng: 4.85309666406198 },
    features: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Towels', 'Cabel TV']
  },
  {
    id: 2,
    rating: 3.2,
    price: 100,
    bedroomCount: 4,
    guestLimit: 8,
    title: 'House',
    description: 'Nice house, awesome walls',
    placeType: 'House',
    images: placeImages,
    isFavorite: false,
    isPremium: true,
    ownerInfo: owner,
    placeReviews: [],
    location: { lat: 52.369553943508, lng: 4.85309666406198 },
    features: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing Machine', 'Coffee Machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV']
  },
  {
    id: 3,
    rating: 3.5,
    price: 20,
    bedroomCount: 1,
    guestLimit: 2,
    title: 'Room',
    description: 'Nice room, awesome walls',
    placeType: 'Room',
    images: placeImages,
    isFavorite: false,
    isPremium: false,
    ownerInfo: owner,
    placeReviews: [reviews[2]],
    location: { lat: 52.3909553943508, lng: 4.929309666406198 },
    features: ['Wi-Fi', 'Heating', 'Fridge', 'Towels', 'Cabel TV']
  },
  {
    id: 4,
    rating: 4.7,
    price: 70,
    bedroomCount: 1,
    guestLimit: 2,
    title: 'Hotel',
    description: 'Nice hotel, awesome walls',
    placeType: 'Hotel',
    images: placeImages,
    isFavorite: true,
    isPremium: true,
    ownerInfo: owner,
    placeReviews: [reviews[3]],
    location: { lat: 52.3809553943508, lng: 4.939309666406198 },
    features: ['Wi-Fi', 'Heating', 'Towels', 'Cabel TV']
  }
];
