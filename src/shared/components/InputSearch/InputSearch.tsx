import IconSearch from '@src/assets/svgs/icon-search.svg?react';
import { classes } from '@src/shared/utils';
import './InputSearch.scss';

interface InputSearchProps {
  size?: 'sm' | 'md';
}

export const InputSearch = ({ size = 'sm' }: InputSearchProps) => (
  <div
    className={classes('c-input-search', (size === 'md') && 'py-[20px]')}
  >
    <input
      type="text"
      className="c-input-search__field"
      placeholder="Search for categories or programs"
    />
    <button>
      <IconSearch className="text-neutral-200" />
    </button>
  </div>
);
