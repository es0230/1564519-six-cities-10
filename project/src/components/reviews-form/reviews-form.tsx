import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { api } from '../../store';
import { Comment } from '../../types/comment';
import { Review } from '../../types/review';
import { sortReviewsByDate } from '../../util';

const initialState: Comment = {
  comment: '',
  rating: 0,
};

type ReviewsFormProps = {
  handleFormSubmit: React.Dispatch<React.SetStateAction<Review[]>>
}

function ReviewsForm({ handleFormSubmit }: ReviewsFormProps): JSX.Element {
  const { id } = useParams();
  const [newComment, setNewComment] = useState<Comment>(initialState);
  const [sendReview, setSendReview] = useState<boolean>(false);

  useEffect(() => {
    if (sendReview) {
      api.post<Review[]>(`${APIRoute.Comments}/${id}`, newComment)
        .then((newReviewList) => handleFormSubmit(sortReviewsByDate(newReviewList.data)));
      setNewComment(initialState);
      setSendReview(false);
    }
  }, [sendReview]);

  const ratingClickHandle = (evt: React.MouseEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    setNewComment({ ...newComment, rating: Number(value) });
  };

  const reviewWritingHandle = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = evt.currentTarget;
    setNewComment({ ...newComment, comment: value });
  };

  const onFormSubmit = async (evt: React.FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setSendReview(true);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onClick={ratingClickHandle} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect" >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onClick={ratingClickHandle} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onClick={ratingClickHandle} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad" >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onClick={ratingClickHandle} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly" >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onClick={ratingClickHandle} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly" >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={reviewWritingHandle}
        value={newComment.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="button"
          disabled={newComment.comment.length <= 50 || newComment.rating === 0}
          onClick={onFormSubmit}
        >
          Submit
        </button>
      </div>
    </form >
  );
}

export default ReviewsForm;
