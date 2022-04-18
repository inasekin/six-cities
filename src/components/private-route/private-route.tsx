import {Navigate} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, NameSpace} from '../../const';
import {useAppSelector} from '../../hooks/hooks';

type PrivateRoutePropsType = RouteProps & {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRoutePropsType): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[NameSpace.auth]);
  const hasAccess = authorizationStatus === 'authorized';

  return (
    hasAccess ? children : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
