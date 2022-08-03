import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { Review } from '../../types/review';

type ReviewsFormProps = {
  reviewList: Review[];
  handleFormSubmit: React.Dispatch<React.SetStateAction<Review[]>>;
}

function ReviewsForm({ reviewList, handleFormSubmit }: ReviewsFormProps): JSX.Element {
  const ratingClickHandle = (evt: React.MouseEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    setReview({ ...review, rating: Number(value) });
  };

  const reviewWritingHandle = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = evt.currentTarget;
    setReview({ ...review, reviewText: value });
  };

  const reviewSubmitHandle = (evt: React.FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setReview({ ...review, id: nanoid() });

    handleFormSubmit([...reviewList, review]);
  };

  const [review, setReview] = useState({
    avatar: '',
    name: '',
    date: '',
    reviewText: '',
    rating: 0,
    id: '',
  });

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
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={reviewWritingHandle}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled onSubmit={reviewSubmitHandle} >Submit</button>
      </div>
    </form >
  );
}

export default ReviewsForm;
