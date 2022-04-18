import Header from '../../components/header/header';
import {useLocation} from 'react-router-dom';
import OfferFeaturesList from '../../components/offer-features-list/offer-features-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import CitiesMap from '../../components/cities-map/cities-map';
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hooks';
import {fetchRoomDataAction} from '../../store/api-actions';
import PlaceCardMark from '../../components/place-card-mark/place-card-mark';
import OffersList from '../../components/offers-list/offers-list';
import OfferHost from '../../components/offer-host/offer-host';
import {getAccommodationTitle, getRatingStyleData} from '../../utils';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import {NameSpace} from '../../const';
import Bookmark from '../../components/bookmark/bookmark';

function PlaceCardDetailsPage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const curLocation = useLocation();
  const {comments, room, offersNearby, authorizationStatus} = useAppSelector((state) => ({
    comments: state[NameSpace.comments],
    room: state[NameSpace.room],
    offersNearby: state[NameSpace.offersNearby],
    authorizationStatus: state[NameSpace.auth],
  }));

  const isAuthorisedUser = authorizationStatus === 'authorized';

  const currentPath = curLocation.pathname;
  const [, , offerId] = currentPath.split('/');

  useEffect(() => {
    if (offerId) {
      dispatch(fetchRoomDataAction(offerId));
    }
  }, [offerId, dispatch]);

  if (!room) {
    return null;
  }

  const cityLocation = room.city.location;
  const points = [...offersNearby, room].map(({ id, location }) => ({ id, location }));

  const {
    id, images, title, rating, isPremium, isFavorite, type, bedrooms, maxAdults, price, goods, description, host,
  } = room;

  return (
    <div className="page">
      <Header authStatus={authorizationStatus} />

      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery images={images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PlaceCardMark type="room" />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <Bookmark hotelId={id} isFavorite={isFavorite} type="room" />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRatingStyleData(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating.toFixed(1)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getAccommodationTitle(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <OfferFeaturesList goods={goods} />
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <OfferHost host={host} />
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList comments={comments}/>
                {isAuthorisedUser && <ReviewForm/>}
              </section>
            </div>
          </div>
          <CitiesMap city={cityLocation} points={points} selectedOffer={Number(offerId)} type="room" />
        </section>
        <div className="container">
          <OffersList offers={offersNearby}  placeCardListType='placeNearby'/>
        </div>
      </main>
    </div>
  );
}

export default PlaceCardDetailsPage;
