import { Link } from 'react-router-dom';
import './HeaderMenu.scss';
import { IListMenu } from '../../models';
import IconDownArrow from '@src/assets/svgs/icon-down-arrow.svg?react';

interface HeaderMenuProps {
  listMenu: IListMenu[];
}

export const HeaderMenu = ({ listMenu }: HeaderMenuProps) => {
  return (
    <div className="c-header-menu">
      <div className="c-header-menu__vignette"></div>
      <ul className="c-header-menu__list">
        {listMenu.map((item, index) => (
          <li key={index} className="c-header-menu__list-item">
            {item.icon}
            <Link className="flex items-center gap-1" to={{ pathname: item.pathName }}>
              {item.text}
              {item.subMenu && <IconDownArrow />}
            </Link>
          </li>
        ))}
      </ul>
      <p className="c-header-menu__assistance">Need assistance?</p>
      <p className="c-header-menu__call">Please Call 1-800-637-4757</p>
      <p className="c-header-menu__text">
        <b> Fax </b> 1-866-463-3230
      </p>
      <p className="c-header-menu__text">
        <b> Claims </b> 1-800-237-2917
      </p>
    </div>
  );
};
