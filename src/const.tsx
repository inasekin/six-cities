import {OffersSortingType} from './types/types';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  NotFound = '/notfound',
  RoomDetail = '/offer/',
  RoomDetailId = '/offer/:id',
  Error = '*'
}

export const MAX_STARS_RATING = 5;

export enum APIRoute {
  Comments = '/comments',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Offers = '/hotels',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const MAX_STARS = 5;

export const HUNDRED = 100;

export const IMG_URL = 'img/';

export const offersSortingVariants: OffersSortingType[] = ['none', 'byPriceUp', 'byPriceDown', 'byRatingDown'];

export enum Pins {
  Normal = 'pin.svg',
  Active = 'pin-active.svg',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  auth = 'AUTH',
  city = 'CITY',
  comments = 'COMMENTS',
  favorites = 'FAVORITES',
  offersNearby = 'OFFERS_NEARBY',
  offers = 'OFFERS',
  room = 'ROOM',
  user = 'USER',
}

export const DEFAULT_USER = {
  avatarUrl: '',
  email: '',
  id: 0,
  isPro: false,
  name: '',
  token: '',
};

export const DEFAULT_ROOM_DATA = {
  comments: [],
  offersNearby: [],
  room: null,
};

export const REVIEW = {
  MaxCount: 10,
  MinLength: 50,
  MaxLength: 300,
} as const;
