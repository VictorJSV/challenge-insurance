import './Header.scss';
import Logo from '@src/assets/images/logo.jpg';
import IconDownArrow from '@src/assets/svgs/icon-down-arrow.svg?react';
import { Link } from 'react-router-dom';
import { classes } from '@src/shared/utils';
import { IListMenu } from '../../models';
import Button from '@src/shared/components/Button/Button';
import { HeaderMobile } from '../HeaderMobile/HeaderMobile';
import { InputSearch } from '@src/shared/components/InputSearch/InputSearch';

interface HeaderProps {
  listMenu: IListMenu[];
}

export const Header = ({ listMenu }: HeaderProps) => {
  return (
    <div className="c-header">
      <div className="hidden md:flex justify-between h-[110px] pt-4">
        <Link aria-label="Volver al inicio" to={{ pathname: '/' }} replace>
          <picture>
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
          <p className="text-red-500 text-start pt-3 pb-4">We Take Fun Seriously</p>
          <Button variant="text">Register</Button>
          <Button variant="text">Login</Button>
        </div>
      </div>
      <HeaderMobile listMenu={listMenu} />
    </div>
  );
};
