import { Review } from '../../types/review';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        const { avatar, name, date, reviewText, id } = review;
        //как-то сделать рейтинг
        return (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {reviewText}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{date}</time>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewsList;
