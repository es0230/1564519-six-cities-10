import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import MainPageTabs from '../../components/main-page-tabs/main-page-tabs';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';
import { CITY } from '../../mocks/city';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const favoriteCount = offers.filter((offer) => offer.isFavorite).length;
  const placeCount = offers.length;

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
              <b className="places__found">{placeCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferList offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map offers={offers} location={CITY} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
