import PlaceCard from '../../components/place-card/place-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  onCardHover: (offer: Offer) => void;
}

function OfferList({ offers, onCardHover }: OfferListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          mouseOverHandler={() => onCardHover(offer)}
        />))}
    </div>
  );
}

export default OfferList;
