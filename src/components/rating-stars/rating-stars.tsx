import {HUNDRED, MAX_STARS} from '../../const';

type RatingStarsPropsType = {
  rating: number;
  children?: JSX.Element;
  componentClassName: string;
}

function RatingStars({ rating, children, componentClassName }: RatingStarsPropsType): JSX.Element {
  const styleStar = {
    width: `${rating * HUNDRED / MAX_STARS  }%`,
  };

  return (
    <div className={`${componentClassName}__rating rating`}>
      <div className={`${componentClassName}__stars rating__stars`}>
        <span style={styleStar}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default RatingStars;
