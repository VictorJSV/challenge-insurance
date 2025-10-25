import './Header.scss';
import Logo from '@src/assets/images/logo.jpg';
import LogoWebp from '@src/assets/images/logo.webp';
import IconDownArrow from '@src/assets/svgs/icon-down-arrow.svg?react';
import { Link } from 'react-router-dom';
import { classes } from '@src/shared/utils';
import { IListMenu } from '../../models';
import Button from '@src/shared/components/Button/Button';
import { HeaderMobile } from '../HeaderMobile/HeaderMobile';
import { InputSearch } from '@src/shared/components/InputSearch/InputSearch';
import { useState } from 'react';
import Container from '@src/shared/components/Container/Container';

interface HeaderProps {
  listMenu: IListMenu[];
}

export const Header = ({ listMenu }: HeaderProps) => {
  const [isOpenLogin, setisOpenLogin] = useState(false);
  return (
    <div className="c-header">
      <div className="c-header__container">
        <Container>
          <div className="c-header__nav">
            <Link aria-label="Volver al inicio" to={{ pathname: '/' }} replace className="c-header__logo">
              <picture>
                <source srcSet={LogoWebp} type="image/webp" />
                <img src={Logo} alt="Logo K&K Insurance" />
              </picture>
            </Link>
            <div className="c-header__center">
              <InputSearch />
              <nav>
                <ul className="c-header__menu">
                  {listMenu.map((item, index) => (
                    <li key={index} className={classes('c-header__menu-item', index === 2 && 'c-header__menu-item--special')}>
                      <Link to={{ pathname: item.pathName }} className="c-header__menu-link">
                        {item.text}
                        {item.subMenu && <IconDownArrow />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="c-header__actions">
              <p className="c-header__slogan">We Take Fun Seriously</p>
              <Button
                variant="text"
                className={classes('c-header__register-btn', isOpenLogin && 'c-header__register-btn--active')}
                onClick={() => setisOpenLogin(!isOpenLogin)}
              >
                Register
              </Button>
              <Button variant="text" className="c-header__login-btn">Login</Button>
            </div>
          </div>
          {isOpenLogin && (
            <div className="c-header__dropdown">
              <div className="c-header__vignette" />
              <p className="c-header__dropdown-text">
                First time here? You can register to save Quotes and Applications
              </p>
              <Button variant="outlined">Register</Button>
            </div>
          )}
          <HeaderMobile listMenu={listMenu} />
        </Container>
      </div>
    </div>
  );
};
