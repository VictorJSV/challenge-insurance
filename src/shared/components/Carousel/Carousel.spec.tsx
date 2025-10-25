import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

jest.mock('react-snap-carousel', () => ({
  useSnapCarousel: () => ({
    scrollRef: jest.fn(),
    hasPrevPage: true,
    hasNextPage: true,
    prev: jest.fn(),
    next: jest.fn(),
    pages: [{}, {}, {}],
    activePageIndex: 1,
    snapPointIndexes: new Set([0, 2]),
  }),
}));

const TestItem = ({ index }: { index: number }) => (
  <Carousel.Item index={index} width={100}>
    Item {index}
  </Carousel.Item>
);

describe('Carousel', () => {
  it('when rendered, then displays children', () => {
    render(
      <Carousel>
        <TestItem index={0} />
        <TestItem index={1} />
      </Carousel>
    );
    expect(screen.getByText('Item 0')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
