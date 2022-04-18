import {AppRoute, NameSpace} from '../../const';
import ErrorPage from '../../pages/error-page/error-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PlaceCardDetailsPage from '../../pages/place-card-details-page/place-card-details-page';
import PrivateRoute from '../private-route/private-route';
import {Route, Routes} from 'react-router-dom';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {useAppSelector} from '../../hooks/hooks';
import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {
  const authStatus = useAppSelector((state) => state[NameSpace.auth]);

  if (authStatus === 'unknown') {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.RoomDetailId} element={<PlaceCardDetailsPage />}/>
        <Route
          path={AppRoute.Error}
          element={<ErrorPage/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
