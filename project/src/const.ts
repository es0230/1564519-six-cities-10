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

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const DEFAULT_MAP_ZOOM = 12;

export { AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, DEFAULT_MAP_ZOOM };
