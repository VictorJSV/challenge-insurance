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
    <div className="c-header md:h-[110px] h-[4.563rem]">
      <div className="fixed w-full md:h-[110px] h-[4.563rem] bg-white z-10 border-b shadow-md">
        <Container>
          <div className="hidden md:flex justify-between h-[110px] pt-4">
            <Link aria-label="Volver al inicio" to={{ pathname: '/' }} replace>
              <picture>
                <source srcSet={LogoWebp} type="image/webp" />
                <img src={Logo} alt="Logo K&K Insurance" />
              </picture>
            </Link>
            <div className="basis-[511px]">
              <InputSearch />
              <ul className="pt-[20px] flex gap-6">
                {listMenu.map((item, index) => (
                  <li key={index} className={classes(index === 2 && 'mr-[77px]')}>
                    <Link to={{ pathname: item.pathName }} className="flex items-center gap-1">
                      {item.text}
                      {item.subMenu && <IconDownArrow />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-[160px] text-end">
              <p className="text-red-500 text-start pt-3 pb-4 font-medium">We Take Fun Seriously</p>
              <Button
                variant="text"
                className={classes(isOpenLogin && 'text-red-500')}
                onClick={() => setisOpenLogin(!isOpenLogin)}
              >
                Register
              </Button>
              <Button variant="text">Login</Button>
            </div>
          </div>
          {isOpenLogin && (
            <div className="absolute z-10 py-3 px-6 bg-white w-[225px] border border-C4 -right-6 hidden md:block">
              <div className="c-header__vignette" />
              <p className="text-xs	mb-2">
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
