import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Offer } from './offer';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
  userEmail: string
}

export type AppData = {
  offers: Offer[]
  city: string
  isDataLoaded: boolean
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
