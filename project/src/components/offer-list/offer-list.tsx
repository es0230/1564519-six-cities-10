import PlaceCard from '../../components/place-card/place-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [, setActiveCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          mouseOverHandler={() => setActiveCard(offer)}
        />))}
    </div>
  );
}

export default OfferList;
