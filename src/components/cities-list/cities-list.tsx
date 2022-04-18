import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCityName } from '../../store/reducers/city-reducer';
import {cities, NameSpace} from '../../const';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state[NameSpace.city]);

  function handleClick(cityName: string) {
    return () => dispatch(setCityName(cityName));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const locationClassName = cn('locations__item-link tabs__item', {
              'tabs__item--active': activeCity === city,
            });
            return (
              <li className="locations__item" key={city}  onClick={handleClick(city)}>
                <a className={locationClassName} href="/#">
                  <span>{city}</span>
                </a>
              </li>
            );
          },
          )}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
