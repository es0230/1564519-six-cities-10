import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Review } from '../../types/review';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type PlaceReviewsProps = {
  reviews: Review[] | undefined;
}

function PlaceReviews({ reviews }: PlaceReviewsProps): JSX.Element {
  const [commentList, setCommentList] = useState<Review[] | undefined>(reviews);
  const { id } = useParams();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    setCommentList(reviews);
  }, [reviews, id]);


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentList?.length}</span></h2>
      <ReviewsList reviews={commentList} />
      {authorizationStatus === 'AUTH' ?
        <ReviewsForm handleFormSubmit={setCommentList} /> :
        <> </>}
    </section>
  );
}

export default PlaceReviews;
