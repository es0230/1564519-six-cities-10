import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type NeighbouringOffersProps = {
  offers: Offer[];
  onCardHover: (offer: Offer) => void;
}

function NeighbouringOffers({ offers, onCardHover }: NeighbouringOffersProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            mouseOverHandler={() => onCardHover(offer)}
          />))}
      </div>
    </section>
  );
}

export default NeighbouringOffers;
