import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { cityChange } from '../../store/app-data/app-data';

type MainPageTabProps = {
  city: string;
  isActive: boolean;
}

function MainPageTab({ city, isActive }: MainPageTabProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        to="/"
        onClick={() => dispatch(cityChange(city))}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default MainPageTab;
