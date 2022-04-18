import {Offer} from '../../types/types';
import FavoriteLocationItem from '../favorite-location-item/favorite-location-item';

type FavoritesListPropsType = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesListPropsType): JSX.Element {
  const sortedOffers = offers.reduce((acc: { [cityName: string]: Offer[] }, offer: Offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {});
  const locationsData = Object.keys(sortedOffers).sort()
    .map((cityName: string) => ({ cityName, offers: sortedOffers[cityName] }));

  return (
    <ul className="favorites__list">
      {locationsData.map((location) => (
        <FavoriteLocationItem key={location.cityName} locationData={location} />
      ))}
    </ul>
  );
}

export default FavoritesList;
