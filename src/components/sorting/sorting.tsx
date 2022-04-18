import {memo, useState} from 'react';
import { offersSortingVariants } from '../../const';
import {OffersSortingType} from '../../types/types';

const textMapping = {
  none: 'Popular',
  byPriceUp: 'Price: low to high',
  byPriceDown: 'Price: high to low',
  byRatingDown: 'Top rated first',
};

const getTextBySortingType = (type: OffersSortingType) => textMapping[type];

type SortingPropsType = {
  setSortingType: (type: OffersSortingType) => void,
  sortingType: OffersSortingType,
}

function Sorting(props: SortingPropsType): JSX.Element {
  const {setSortingType, sortingType} = props;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const chooseSortingType = (type: OffersSortingType) => () => {
    setSortingType(type);
    setIsMenuOpened(false);
  };

  const openSortingMenu = () => {
    setIsMenuOpened(true);
  };

  return (
    <form className="places__sorting" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={openSortingMenu}>
        {getTextBySortingType(sortingType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${' places__options--opened'}`}>
        {isMenuOpened && offersSortingVariants.map((item) => (
          <li key={item} className="places__option" tabIndex={0} onClick={chooseSortingType(item)}>{getTextBySortingType(item)}</li>
        ))}
      </ul>
    </form>
  );
}

export default memo(Sorting, (prevProps, nextProps) => prevProps.sortingType === nextProps.sortingType);
