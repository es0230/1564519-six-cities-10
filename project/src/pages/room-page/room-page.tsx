import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import PropertyHost from '../../components/property-host/property-host';
import { Offer } from '../../types/offer';
import PropertyInside from '../../components/property-inside/property-inside';
import PlaceReviews from '../../components/place-reviews/place-reviews';
import Map from '../../components/map/map';
import NeighbouringOffers from '../../components/neighbouring-offers/neighbouring-offers';
import { getOfferCoordinates, getWidthFromRating } from '../../util';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../store';
import { APIRoute } from '../../const';
import { Review } from '../../types/review';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { useFavoriteCard } from '../../hooks/use-favorite-card';

function RoomPage(): JSX.Element {
  const { id } = useParams();
  const [currentOffer, setCurrentOffer] = useState<Offer>();
  const [neighbouringOffers, setNeighbouringOffers] = useState<Offer[]>([]);
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [isFavorite, handleFavoriteToggle] = useFavoriteCard(currentOffer);
  const navigate = useNavigate();

  useEffect(() => {
    api.get<Offer>(`${APIRoute.Offers}/${id}`)
      .then((offer) => setCurrentOffer(offer.data))
      .catch(() => navigate('*'));
    api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`).then((offers) => setNeighbouringOffers(offers.data));
    api.get<Review[]>(`${APIRoute.Comments}/${id}`).then((comments) => setReviewList(comments.data));
  }, [id]);

  if (currentOffer === undefined) {
    return <LoadingScreen />;
  }

  const { price, bedrooms, rating, maxAdults, title, description, type, images, isPremium, host, goods } = currentOffer;

  return (
    <div className="page">
      <Header />
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
                <button
                  className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={() => handleFavoriteToggle(currentOffer.id)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getWidthFromRating(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <PropertyInside features={goods} />
              <PropertyHost owner={host} placeDescription={description} />
              <PlaceReviews reviews={reviewList} />
            </div>
          </div>
          <div style={{ width: '1150px', height: '500px', margin: '0 auto 50px auto' }}>
            <Map offers={neighbouringOffers?.concat(currentOffer)} currentCity={getOfferCoordinates(currentOffer)} activeCard={currentOffer} />
          </div>
        </section>
        <div className="container">
          <NeighbouringOffers offers={neighbouringOffers} />
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
