import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import MainPageTabs from '../../components/main-page-tabs/main-page-tabs';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { Cities } from '../../const';
import SortVariants from '../../components/sort-variants/sort-variants';
import { useState } from 'react';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  const favoriteCount = offers.filter((offer) => offer.isFavorite).length;
  const currentCity = useAppSelector((state) => state.city);
  const localOffers = useAppSelector((state) => state.offers).filter((offer) => offer.city === currentCity);

  const onCardHover = (offer: Offer) => {
    setActiveCard(offer);
  };

  return (
    <div className="page page--gray page--main">
      <Header
        favoriteCount={favoriteCount}
      />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <MainPageTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{localOffers.length} place{localOffers.length > 1 ? 's' : ''} to stay in {currentCity}</b>
              <SortVariants />
              <OfferList offers={localOffers} onCardHover={onCardHover} />
            </section>
            <div className="cities__right-section">
              <Map offers={localOffers} currentCity={Cities[currentCity]} activeCard={activeCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
