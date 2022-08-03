import { useState } from 'react';
import { Review } from '../../types/review';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type PlaceReviewsProps = {
  reviews: Review[];
}

function PlaceReviews({ reviews }: PlaceReviewsProps): JSX.Element {
  const [reviewList, useReviewList] = useState(reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewsList reviews={reviewList} />
      <ReviewsForm reviewList={reviewList} handleFormSubmit={useReviewList} />
    </section>
  );
}

export default PlaceReviews;
