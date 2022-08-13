import { Cities } from '../../const';
import MainPageTabs from '../main-page-tabs/main-page-tabs';
import OfferList from '../offer-list/offer-list';
import SortVariants from '../sort-variants/sort-variants';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import { Offer } from '../../types/offer';
import { getCurrentCity, getOffers } from '../../store/app-data/selectors';

function Main() {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  const currentCity = useAppSelector(getCurrentCity);
  const localOffers = useAppSelector(getOffers).filter((offer) => offer.city.name === currentCity);

  const onCardHover = (offer: Offer) => {
    setActiveCard(offer);
  };

  return (
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
  );
}

export default Main;
