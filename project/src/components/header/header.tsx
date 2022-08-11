import { useAppSelector } from '../../hooks';
import Logo from '../logo/logo';
import Profile from '../profile/profile';

function Header(): JSX.Element {
  const favoriteCount = useAppSelector((state) => state.offers).filter((offer) => offer.isFavorite).length;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Profile favoriteCount={favoriteCount} />
        </div>
      </div>
    </header>
  );
}

export default Header;
