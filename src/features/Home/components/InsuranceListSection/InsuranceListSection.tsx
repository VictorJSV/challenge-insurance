import Button from '@src/shared/components/Button/Button';
import Carousel from '@src/shared/components/Carousel/Carousel';
import IconFilledStar from '@src/assets/svgs/icon-filled-star.svg?react';
import IconFilledPlane from '@src/assets/svgs/icon-plane.svg?react';
import IconFilledHeart from '@src/assets/svgs/icon-heart.svg?react';
import IconFilledCar from '@src/assets/svgs/icon-car.svg?react';

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
    <section className="mx-auto mt-[47px] mb-16" aria-labelledby="insuranceListSection">
      <h2
        className="text-red-500 text-center text-2xl font-medium mb-[19px]"
        id="insuranceListSection"
      >
        Find the ideal insurance for you
      </h2>
      <Carousel className="py-1 md:justify-center gap-4 md:gap-[47px]">
        {insurances.map((item, index) => (
          <Carousel.Item key={index} index={index} width="245px">
            <div className="flex flex-col">
              <div className="p-5 shadow-md h-full border border-EF rounded-lg mb-[32px] text-center">
                <div className="w-[140px] h-[140px] bg-red-500 mx-auto rounded-full mb-[10.47px] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="mb-[10.47px] text-xl font-medium">{item.title}</h3>
                <ul className="text-neutral-300 inline-block min-w-28">
                  {item.lists.map((listItem) => (
                    <li className="flex gap-2">
                      <IconFilledStar className="text-red-500 scale-75" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-[42px]">
                <Button variant="filled" className="w-full">
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
