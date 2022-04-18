import {useAppDispatch} from '../../hooks/hooks';
import {LocationsDataType} from '../../types/types';
import {setCityName} from '../../store/reducers/city-reducer';
import LocationLink from '../location-link/location-link';
import FavoritePlacesList from '../favorite-places-list/favorite-places-list';

function FavoriteLocationItem(props: { locationData: LocationsDataType }) {
  const dispatch = useAppDispatch();
  const { cityName, offers } = props.locationData;

  function handleClick() {
    dispatch(setCityName(cityName));
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item" onClick={handleClick}>
          <LocationLink cityName={cityName}/>
        </div>
      </div>
      <FavoritePlacesList offers={offers}/>
    </li>
  );
}

export default FavoriteLocationItem;
