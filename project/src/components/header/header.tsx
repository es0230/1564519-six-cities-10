import Logo from '../logo/logo';
import Profile from '../profile/profile';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
