import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import RoomPage from '../../pages/room-page/room-page';
import Page404 from '../../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

type AppScreenProps = {
  favoriteCount: number;
  placeCount: number;
}

function App({ favoriteCount, placeCount }: AppScreenProps): JSX.Element {
  const mainPage = (<MainPage favoriteCount={favoriteCount} placeCount={placeCount} />);
  const favoritePage = (<FavoritePage favoriteCount={favoriteCount} />);
  const roomPage = (<RoomPage favoriteCount={favoriteCount} />);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={mainPage} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            {favoritePage}
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={roomPage} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
