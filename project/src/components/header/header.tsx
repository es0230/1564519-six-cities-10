import Logo from '../logo/logo';
import Profile from '../profile/profile';

type HeaderProps = {
  favoriteCount: number
}

function Header({ favoriteCount }: HeaderProps): JSX.Element {
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
