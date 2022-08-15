import MainPageOffers from '../main-page-offers/main-page-offers';
import MainPageTabs from '../main-page-tabs/main-page-tabs';

function Main() {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainPageTabs />
      <MainPageOffers />
    </main>
  );
}

export default Main;
