import { useAppSelector } from '../../hooks';
import MainPageTab from '../main-page-tab/main-page-tab';
import { Cities } from '../../const';
import { getCurrentCity } from '../../store/app-data/selectors';


function MainPageTabs(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const cities = Object.keys(Cities);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (<MainPageTab city={city} isActive={currentCity === city} key={city} />))}
        </ul>
      </section>
    </div>
  );
}

export default MainPageTabs;
