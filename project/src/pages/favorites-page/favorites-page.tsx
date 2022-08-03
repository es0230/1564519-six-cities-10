import Header from '../../components/header/header';
import FavoritesPlaceCard from '../../components/favorites-place-card/favorites-place-card';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';

type FavoritePageProps = {
  offers: Offer[];
};

function FavoritePage({ offers }: FavoritePageProps): JSX.Element {
  const favoriteCount = offers.filter((offer) => offer.isFavorite).length;

  return (
    <div className="page">
      <Header
        favoriteCount={favoriteCount}
      />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => offer.isFavorite ?
                    <FavoritesPlaceCard
                      key={offer.id}
                      offer={offer}
                    /> :
                    null)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritePage;
