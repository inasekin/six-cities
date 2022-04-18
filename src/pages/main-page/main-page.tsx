import CitiesMap from '../../components/cities-map/cities-map';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import {useState} from 'react';
import {useAppSelector} from '../../hooks/hooks';
import MainPageNoOffers from './main-page-no-offers';
import {OffersSortingType} from '../../types/types';
import {NameSpace} from '../../const';
import getCompareFunction from '../../utils';
import Sorting from '../../components/sorting/sorting';

const DEFAULT_LOCATION = {latitude: 0, longitude: 0, zoom: 0 };

function MainPage(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(null as number | null);
  const { city, offers, authorizationStatus } = useAppSelector((state) => ({
    city: state[NameSpace.city],
    offers: state[NameSpace.offers],
    authorizationStatus: state[NameSpace.auth],
  }));
  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const isOffersListEmpty = sortedByCityOffers.length === 0;

  const [sortingType, setSortingType] = useState<OffersSortingType>('none');
  const sortedOffers = [...sortedByCityOffers].sort(getCompareFunction(sortingType));
  const cityLocation = sortedOffers[0] ? sortedOffers[0].city.location : DEFAULT_LOCATION;

  const points = sortedByCityOffers.map(({ id, location }) => ({ id, location }));

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authorizationStatus} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          {isOffersListEmpty ?
            (
              <MainPageNoOffers />
            ) : (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{sortedOffers.length} places to stay in {city}</b>
                  <Sorting setSortingType={setSortingType} sortingType={sortingType}/>
                  <OffersList setActiveOffer={setActiveOffer} offers={sortedOffers} placeCardListType="placeCard" />
                </section>
                <div className="cities__right-section">
                  <CitiesMap city={cityLocation} points={points} selectedOffer={activeOffer} type='main'/>
                </div>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
