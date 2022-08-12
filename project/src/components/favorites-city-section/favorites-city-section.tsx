import { Offer } from '../../types/offer';
import FavoritesPlaceCard from '../favorites-place-card/favorites-place-card';

type FavoritesCitySectionProps = {
  city: string;
  offers?: Offer[];
}

function FavoritesCitySection({ city, offers }: FavoritesCitySectionProps): JSX.Element {
  if (offers?.length === 0) {
    return <> </>;
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers?.map((offer) => offer.isFavorite ?
          <FavoritesPlaceCard
            key={offer.id}
            offer={offer}
          /> :
          null)}
      </div>
    </li>
  );
}

export default FavoritesCitySection;
