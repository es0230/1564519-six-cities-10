/* eslint-disable no-console */
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { toggleIsFavoriteCard } from '../../store/action';
import { useState } from 'react';
import { api } from '../../store';

type FavoritesPlaceCardProps = {
  offer: Offer;
}

function FavoritesPlaceCard({ offer }: FavoritesPlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);

  const onBookmarkButtonClick = async (id: number) => {
    try {
      const { data: updatedOffer } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${Number(!isFavorite)}`);
      setIsFavorite(updatedOffer.isFavorite);
      dispatch(toggleIsFavoriteCard({ id: id, newIsFavorite: updatedOffer.isFavorite }));
    } catch {
      console.log('Запрос не удался');
    }
  };

  const { isPremium, price, title, type, images, rating, id } = offer;
  return (
    <article className="favorites__card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        :
        null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offers/${offer.id}`}>
          <img className="place-card__image" src={images[0]} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={() => onBookmarkButtonClick(id)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${20 * rating}%` }}></span>
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

export default FavoritesPlaceCard;
