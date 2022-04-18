import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {NameSpace} from '../../const';
import {fetchFavoritesAction} from '../../store/api-actions';
import {useLayoutEffect} from 'react';
import cn from 'classnames';
import FavoritesFooter from '../../components/favorites-footer/favorites-footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state[NameSpace.favorites]);
  const authorizationStatus = useAppSelector((state) => state[NameSpace.auth]);

  const isFavoritesEmpty = offers.length === 0;

  useLayoutEffect(() => {
    dispatch(fetchFavoritesAction);
  }, [dispatch]);

  const mainClassName = cn('page__main', 'page__main--favorites', {
    'page__main--favorites-empty': isFavoritesEmpty,
  });

  return (
    <div className="page">
      <Header authStatus={authorizationStatus} />

      <main className={mainClassName}>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {isFavoritesEmpty
              ? <FavoritesEmpty />
              : <FavoritesList offers={offers} />}
          </section>
        </div>
      </main>
      <FavoritesFooter />
    </div>
  );
}

export default FavoritesPage;
