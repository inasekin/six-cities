import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/types';

function FavoritePlacesList(props: {offers: Offer[]}) {
  return (
    <div className="favorites__places">
      {props.offers.map((offer) => <OfferCard key={offer.id} offer={offer} placeCardType='favorite' />)}
    </div>
  );
}

export default FavoritePlacesList;
