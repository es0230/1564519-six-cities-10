import Header from '../../components/header/header';
import FavoritesCitySection from '../../components/favorites-city-section/favorites-city-section';
import { Link } from 'react-router-dom';
import { APIRoute, Cities } from '../../const';
import { useEffect, useState } from 'react';
import { Offer } from '../../types/offer';
import { api } from '../../store';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import FavortiesEmpty from '../../components/favorites-empty/favorites-empty';
import { useAppSelector } from '../../hooks';

function FavoritePage(): JSX.Element {
  const cities = Object.keys(Cities);
  const [favoriteOffers, setFavoriteOffers] = useState<Offer[] | undefined>();
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    api.get<Offer[] | undefined>(APIRoute.Favorite).then((newFavoriteOffers) => setFavoriteOffers(newFavoriteOffers.data));
  }, [offers]);

  if (favoriteOffers === undefined) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 ?
            <FavortiesEmpty /> :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => <FavoritesCitySection key={city} city={city} offers={favoriteOffers?.filter((offer) => offer.city.name === city)} />)}
              </ul>
            </section>}

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

