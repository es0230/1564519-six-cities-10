import type { Coordinates } from './types/coordinates';

enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offers/:id',
  Main = '/',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

const Cities: { [index: string]: Coordinates } = {
  'Paris': [48.854938, 2.349892],
  'Cologne': [50.937442, 6.959837],
  'Brussels': [50.848177, 4.354027],
  'Amsterdam': [52.375955, 4.899096],
  'Hamburg': [53.552986, 9.991250],
  'Dusseldorf': [51.226329, 6.776126]
};

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_ACTIVE =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const DEFAULT_MAP_ZOOM = 12;

export { AppRoute, AuthorizationStatus, APIRoute, URL_MARKER_DEFAULT, URL_MARKER_ACTIVE, DEFAULT_MAP_ZOOM, Cities };
