import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Review } from '../../types/review';
import { sortReviewsByDate } from '../../util';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type PlaceReviewsProps = {
  reviews: Review[];
}

function PlaceReviews({ reviews }: PlaceReviewsProps): JSX.Element {
  const [commentList, setCommentList] = useState<Review[]>(sortReviewsByDate(reviews));
  const { id } = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    setCommentList(reviews);
  }, [reviews, id]);


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentList?.length}</span></h2>
      <ReviewsList reviews={commentList.slice(0, 10)} />
      {authorizationStatus === 'AUTH' ?
        <ReviewsForm handleFormSubmit={setCommentList} /> :
        <> </>}
    </section>
  );
}

export default PlaceReviews;
