import { Review } from '../../types/review';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type PlaceReviewsProps = {
  reviews: Review[] | undefined;
}

function PlaceReviews({ reviews }: PlaceReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>
      <ReviewsList reviews={reviews} />
      <ReviewsForm />
    </section>
  );
}

export default PlaceReviews;
