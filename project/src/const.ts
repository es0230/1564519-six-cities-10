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

export { AppRoute, AuthorizationStatus };
