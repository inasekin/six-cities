import HeaderLogo from '../header-logo/header-logo';
import NavLogged from './nav-logged';
import NavNotLogged from './nav-not-logged';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {NameSpace} from '../../const';

type AuthStatusPropsType = {
  authStatus: string;
}

function Header({authStatus}: AuthStatusPropsType): JSX.Element {

  const dispatch = useAppDispatch();
  const {email} = useAppSelector((state) => ({
    authStatus: state[NameSpace.auth],
    email: state[NameSpace.user].email,
  }));

  function getHeaderContent(): JSX.Element {
    if (authStatus === 'authorized') {
      return (
        <NavLogged dispatch={dispatch} email={email}/>
      );
    } else {
      return (
        <NavNotLogged/>
      );
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo/>
          </div>
          <nav className="header__nav">
            {getHeaderContent()}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
