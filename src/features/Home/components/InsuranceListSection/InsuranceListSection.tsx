import Button from '@src/shared/components/Button/Button';
import Carousel from '@src/shared/components/Carousel/Carousel';
import IconFilledStar from '@src/assets/svgs/icon-filled-star.svg?react';
import IconFilledPlane from '@src/assets/svgs/icon-plane.svg?react';
import IconFilledHeart from '@src/assets/svgs/icon-heart.svg?react';
import IconFilledCar from '@src/assets/svgs/icon-car.svg?react';
import './InsuranceListSection.scss';

export const InsuranceListSection = () => {
  const insurances = [
    {
      icon: <IconFilledPlane />,
      title: 'Travel',
      lists: ['Bullet one', 'Bullet two', 'Bullet three'],
    },
    {
      icon: <IconFilledHeart />,
      title: 'Life & Health',
      lists: ['Bullet one', 'Bullet two', 'Bullet three'],
    },
    {
      icon: <IconFilledCar />,
      title: 'Cars & Transport',
      lists: ['Bullet one', 'Bullet two', 'Bullet three'],
    },
  ];
  return (
    <section className="c-insurance-list" aria-labelledby="insuranceListSection">
      <h2
        className="c-insurance-list__title"
        id="insuranceListSection"
      >
        Find the ideal insurance for you
      </h2>
      <Carousel className="c-insurance-list__carousel">
        {insurances.map((item, index) => (
          <Carousel.Item key={index} index={index} width="245px">
            <div className="c-insurance-list__item">
              <div className="c-insurance-list__card">
                <div className="c-insurance-list__icon">
                  {item.icon}
                </div>
                <h3 className="c-insurance-list__card-title">{item.title}</h3>
                <ul className="c-insurance-list__features">
                  {item.lists.map((listItem) => (
                    <li className="c-insurance-list__feature">
                      <IconFilledStar className="c-insurance-list__star" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="c-insurance-list__button-container">
                <Button variant="filled" className="c-insurance-list__button">
                  View Details
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
