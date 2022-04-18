import {uniqueId} from '../../utils';

function OfferFeaturesList(props: { goods: string[] }): JSX.Element {
  const { goods } = props;
  return (
    <ul className="property__inside-list">
      {goods.map((item) => (
        <li key={uniqueId('features')} className="property__inside-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default OfferFeaturesList;
