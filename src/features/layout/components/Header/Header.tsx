import './Header.scss';
import Logo from '@src/assets/images/logo.jpg';
import IconSearch from '@src/assets/svgs/icon-search.svg?react';
import IconDownArrow from '@src/assets/svgs/icon-down-arrow.svg?react';
import { Link } from 'react-router-dom';
import { classes } from '@src/shared/utils';
import { IListMenu } from '../../models';
import Button from '@src/shared/components/Button/Button';
import { HeaderMobile } from '../HeaderMobile/HeaderMobile';

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
          <div className="bg-neutral-100 flex py-[10px] px-[19px] gap-2 rounded-[10px]">
            <input
              type="text"
              className="grow focus-visible:outline-0 bg-transparent"
              placeholder="Search for categories or programs"
            />
            <button>
              <IconSearch className="text-neutral-200" />
            </button>
          </div>
          <ul className="pt-[20px] flex gap-6">
            {listMenu.map((item, index) => (
              <li className={classes(index === 2 && 'mr-[77px]')}>
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
