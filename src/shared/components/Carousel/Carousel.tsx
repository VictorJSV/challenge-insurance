import { Children, ReactNode, cloneElement, isValidElement } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import './Carousel.scss';
import { classes } from '@src/shared/utils';

interface CarouselItemProps {
  children?: ReactNode;
  width?: string | number;
  index: number;
  isSnapPoint?: boolean;
}

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

const Carousel = ({ children, className }: CarouselProps) => {
  const { scrollRef, snapPointIndexes } = useSnapCarousel();

  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === CarouselItem) {
      const isSnapPoint = snapPointIndexes.has(child.props.index);
      return cloneElement(child, { isSnapPoint });
    }
    return child;
  });

  return (
    <div className="c-carousel">
      <ul className={classes('c-carousel__scroll', className)} ref={scrollRef}>
        {enhancedChildren}
      </ul>
    </div>
  );
};

const CarouselItem = ({ children, width, isSnapPoint }: CarouselItemProps) => (
  <li
    className={classes('c-carousel__item', isSnapPoint && 'c-carousel__item--snap-point')}
    style={{ width }}
  >
    {children}
  </li>
);

Carousel.Item = CarouselItem;

export default Carousel;
