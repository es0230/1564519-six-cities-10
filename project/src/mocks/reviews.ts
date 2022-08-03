import { nanoid } from '@reduxjs/toolkit';
import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    avatar: 'https://cdnstatic.rg.ru/uploads/images/210/83/90/TASS_46189702.jpg',
    name: 'Hoot Hoot',
    date: 'February 2022',
    reviewText: 'Perfect place',
    rating: 5,
    id: nanoid(),
  },
  {
    avatar: 'https://cdnstatic.rg.ru/uploads/images/210/83/90/TASS_46189702.jpg',
    name: 'Hoot Hoot',
    date: 'July 2022',
    reviewText: 'Not bad',
    rating: 3,
    id: nanoid(),
  },
  {
    avatar: 'https://cdnstatic.rg.ru/uploads/images/210/83/90/TASS_46189702.jpg',
    name: 'Hoot Hoot',
    date: 'September 2021',
    reviewText: 'No towels :c',
    rating: 2,
    id: nanoid(),
  },
  {
    avatar: 'https://cdnstatic.rg.ru/uploads/images/210/83/90/TASS_46189702.jpg',
    name: 'Hoot Hoot',
    date: 'December 2021',
    reviewText: 'The place is cool but the view is\'nt',
    rating: 4,
    id: nanoid(),
  },
];
