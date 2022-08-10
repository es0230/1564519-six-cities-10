import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  mouseOverHandler: () => void;
};

function PlaceCard({ offer, mouseOverHandler }: PlaceCardProps): JSX.Element {
  const { price, title, type, images, isFavorite, isPremium, id } = offer;
  //еще рейтинг как-то сделать
  return (
    <article className="cities__card place-card" onMouseOver={mouseOverHandler}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        :
        null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offers/${offer.id}`}>
          <img className="place-card__image" src={images[id % 4]} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offers/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
