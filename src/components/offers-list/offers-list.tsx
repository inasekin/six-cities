import {memo} from 'react';
import cn from 'classnames';
import {Offer, PlaceCardType} from '../../types/types';
import OfferCard from '../offer-card/offer-card';

type PlaceCardListProps = {
  offers: Offer[],
  setActiveOffer?: (x: number | null) => void,
  placeCardListType: PlaceCardType,
}

function OffersList(props: PlaceCardListProps) {
  const { offers, placeCardListType } = props;

  const cardClassName = cn('places__list', {
    'cities__places-list': placeCardListType === 'placeCard',
    'tabs__content': placeCardListType === 'placeCard',
    'near-places__list': placeCardListType === 'placeNearby',
  });

  return (
    <div className={cardClassName}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setActiveOffer={props.setActiveOffer}
          placeCardType={placeCardListType}
        />
      ))}
    </div>
  );
}

export default memo(OffersList, (prevProps, nextProps) => {
  const isOfferIdsEqual = (prevOffers: Offer[], nextOffers: Offer[]) => prevOffers.every(
    (item, index) => item.id === nextOffers[index].id && item.isFavorite === nextOffers[index].isFavorite);
  return isOfferIdsEqual(prevProps.offers, nextProps.offers)
    && prevProps.placeCardListType === nextProps.placeCardListType;
});
