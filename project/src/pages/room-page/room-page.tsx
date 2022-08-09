import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import NotFound from '../../components/not-found/not-found';
import PropertyHost from '../../components/property-host/property-host';
import { Offer } from '../../types/offer';
import { useParams } from 'react-router-dom';
import PropertyInside from '../../components/property-inside/property-inside';
import PlaceReviews from '../../components/place-reviews/place-reviews';
import Map from '../../components/map/map';
import NeighbouringOffers from '../../components/neighbouring-offers/neighbouring-offers';
import { useState } from 'react';

type RoomPageProps = {
  offers: Offer[];
}

function RoomPage({ offers }: RoomPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  const favoriteCount = offers.filter((offer) => offer.isFavorite).length;
  const { id } = useParams();
  const currentOffer = offers.find((offer) => String(offer.id) === id);
  const otherOffers = offers.filter((offer) => String(offer.id) !== id).filter((offer) => currentOffer !== undefined && currentOffer.city === offer.city);

  const onCardHover = (offer: Offer) => {
    setActiveCard(offer);
  };

  if (currentOffer === undefined) {
    return <NotFound />;
  }

  const { price, bedroomCount, rating, guestLimit, title, description, placeType, images, isFavorite, isPremium, ownerInfo, features, placeReviews } = currentOffer;
  return (
    <div className="page">
      <Header
        favoriteCount={favoriteCount}
      />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <OfferGallery images={images} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> :
                null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {placeType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomCount}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guestLimit} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <PropertyInside features={features} />
              <PropertyHost owner={ownerInfo} placeDescription={description} />
              <PlaceReviews reviews={placeReviews} />
            </div>
          </div>
          <div style={{ width: '1150px', height: '500px', margin: '0 auto 50px auto' }}>
            <Map offers={otherOffers} currentCity={currentOffer.coordinates} activeCard={activeCard} />
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <NeighbouringOffers offers={otherOffers} onCardHover={onCardHover} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
