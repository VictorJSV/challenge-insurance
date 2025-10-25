import Carousel from '@src/shared/components/Carousel/Carousel';
import IconOutlinedStar from '@src/assets/svgs/icon-outlined-star.svg?react';
import IconFilledStar from '@src/assets/svgs/icon-filled-star.svg?react';
import ImgPerson1 from '@src/assets/images/person1.jpg';
import ImgPerson2 from '@src/assets/images/person2.jpg';
import ImgPerson3 from '@src/assets/images/person3.jpg';
import './OpinionsSection.scss';

export const OpinionsSection = () => {
  const opinions = [
    {
      rating: 4,
      description:
        "It's wonderful to call an organization and actually get a pleasant, helpful voice on the line.",
      img: ImgPerson1,
      name: 'Bailey H.',
    },
    {
      rating: 4,
      description:
        'Thanks for doing such a good  job!  Nothing is more important than great customer service.',
      img: ImgPerson2,
      name: 'John H.',
    },
    {
      rating: 4,
      description:
        "Thank you so much for your help with my insurance claim!  You were terrific!  It was by far the best customer service I've had in years!",
      img: ImgPerson3,
      name: 'Martha R.',
    },
  ];
  return (
    <section className="c-opinions" aria-labelledby='opinionsSection'>
      <h2 className="c-opinions__title" id="opinionsSection">
        What customers are saying
      </h2>
      <div className="c-opinions__container">
        <Carousel className="c-opinions__carousel">
          {opinions.map((item, index) => (
            <Carousel.Item key={index} index={index} width="275px">
              <div className="c-opinions__card">
                <div className="c-opinions__rating">
                  {new Array(5).fill('').map((_, j) => (
                    <div key={j} className="c-opinions__star">
                      {j + 1 <= item.rating ? <IconFilledStar className='c-opinions__star--filled' /> : <IconOutlinedStar />}
                    </div>
                  ))}
                </div>
                <p className='c-opinions__description'>"{item.description}"</p>
                <div className="c-opinions__author">
                  <div className='c-opinions__avatar'>
                    <img src={item.img} alt="Perfil de persona" />
                  </div>
                  <div className="c-opinions__name">{item.name}</div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
