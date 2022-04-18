import {AccommodationType, Offer, OffersSortingType} from './types/types';

const accomodationTitleMapping = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export function getAccommodationTitle(type: AccommodationType) {
  return accomodationTitleMapping[type];
}

export function getRandomValue(arr: Array<unknown>) {
  const maxIndex = arr.length - 1;
  const index = Math.round(Math.random() * maxIndex);
  return arr[index];
}

export function getRatingStyleData(rating: number) {
  return Math.round(rating) * 20;
}

export const uniqueId = Object.assign(
  (prefix = '') => {
    uniqueId.counter += 1;
    return `${prefix}${uniqueId.counter}`;
  },
  { counter: 0 },
);

export const compareFunctionMapping = {
  none: () => 0,
  byPriceUp: (a: Offer, b: Offer) => a.price - b.price,
  byPriceDown: (a: Offer, b: Offer) => b.price - a.price,
  byRatingDown: (a: Offer, b: Offer) => b.rating - a.rating,
};

function getCompareFunction(type: OffersSortingType): (a: Offer, b: Offer) => number {
  return compareFunctionMapping[type];
}

export default getCompareFunction;
