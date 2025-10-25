import { useState } from "react";
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { HeaderLogin } from '../HeaderLogin/HeaderLogin';
import IconSandwich from '@src/assets/svgs/icon-sandwich.svg?react';
import IconPersonFill from '@src/assets/svgs/icon-person-fill.svg?react';
import IconCross from '@src/assets/svgs/icon-cross.svg?react';
import LogoMobile from '@src/assets/images/logo-mobile.jpg';
import LogoMobileWebp from '@src/assets/images/logo-mobile.webp';
import IconSearch from '@src/assets/svgs/icon-search.svg?react';
import { Link } from "react-router-dom";
import { classes } from "@src/shared/utils";
import { IListMenu } from "../../models";
import './HeaderMobile.scss';

interface HeaderProps {
  listMenu: IListMenu[];
}

export const HeaderMobile = ({ listMenu }: HeaderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsOpenLogin(false);
  };

  const handleClickLogin = () => {
    setIsOpenLogin(!isOpenLogin);
    setIsOpenMenu(false);
  };
  return (
    <div className="c-header-mobile">
      <div className="c-header-mobile__inner">
        <div className="c-header-mobile__inner-left">
          <button onClick={handleClickMenu}>{isOpenMenu ? <IconCross /> : <IconSandwich />}</button>
          <button>
            <IconSearch className="text-red-500" />
          </button>
        </div>
        <Link aria-label="Volver al inicio" to={{ pathname: '/' }} replace>
          <picture>
            <source srcSet={LogoMobileWebp} type="image/webp" />
            <img src={LogoMobile} alt="Logo K&K Insurance" />
          </picture>
        </Link>
        <button
          className={classes(
            'c-header-mobile__button-login',
            isOpenLogin && 'c-header-mobile__button-login--is-active'
          )}
          onClick={handleClickLogin}
        >
          <IconPersonFill />
        </button>
      </div>
      {isOpenMenu && <HeaderMenu listMenu={listMenu} />}
      {isOpenLogin && <HeaderLogin />}
    </div>
  );
};
