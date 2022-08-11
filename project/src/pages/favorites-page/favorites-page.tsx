import Header from '../../components/header/header';
import FavoritesCitySection from '../../components/favorites-city-section/favorites-city-section';
import { Link } from 'react-router-dom';
import { Cities } from '../../const';
import { useAppSelector } from '../../hooks';

function FavoritePage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities = Object.keys(Cities);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => <FavoritesCitySection key={city} city={city} offers={favoriteOffers.filter((offer) => offer.city.name === city)} />)}
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
