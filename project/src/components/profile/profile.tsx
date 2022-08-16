import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuthAction, logoutAction } from '../../store/api-actions';
import { getFavoriteOffersCount } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useEffect, useState } from 'react';
import { api } from '../../store';
import { UserData } from '../../types/user-data';

function Profile(): JSX.Element {
  const favoriteCount = useAppSelector(getFavoriteOffersCount);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [activeUser, setActiveUser] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.get<UserData>(APIRoute.Login)
      .then((user) => setActiveUser(user.data.email));
  });

  const onClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logoutAction());
      dispatch(checkAuthAction());
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
