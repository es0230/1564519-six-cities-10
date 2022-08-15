import { Cities } from '../../const';
import OfferList from '../offer-list/offer-list';
import SortVariants from '../sort-variants/sort-variants';
import Map from '../map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getCurrentCity, getOffers } from '../../store/app-data/selectors';
import { Offer } from '../../types/offer';
import MainEmpty from '../main-empty/main-empty';

function MainPageOffers(): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  const currentCity = useAppSelector(getCurrentCity);
  const localOffers = useAppSelector(getOffers).filter((offer) => offer.city.name === currentCity);

  if (localOffers.length === 0) {
    return <MainEmpty currentCity={currentCity} />;
  }

  const onCardHover = (offer: Offer) => {
    setActiveCard(offer);
  };

  return (
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
  );
}

export default MainPageOffers;
