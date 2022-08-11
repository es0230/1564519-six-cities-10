import { AppRoute, AuthorizationStatus } from '../../const';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';


type ProfileProps = {
  favoriteCount: number
}

function Profile({ favoriteCount }: ProfileProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const activeUser = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logoutAction());
    }
    navigate(AppRoute.Login);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to="/favorites">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{activeUser}</span>
              <span className="header__favorite-count">{favoriteCount}</span>
            </Link>
          </li> :
          <> </>}

        <li className="header__nav-item">
          <button className="header__nav-link" onClick={onClick}>
            <span className="header__signout">{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Profile;
