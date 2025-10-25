import Carousel from '@src/shared/components/Carousel/Carousel';
import IconOutlinedStar from '@src/assets/svgs/icon-outlined-star.svg?react';
import IconFilledStar from '@src/assets/svgs/icon-filled-star.svg?react';
import ImgPerson1 from '@src/assets/images/person1.jpg';
import ImgPerson2 from '@src/assets/images/person2.jpg';
import ImgPerson3 from '@src/assets/images/person3.jpg';

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
    <section aria-labelledby='opinionsSection'>
      <h2 className="text-center text-red-500 font-medium	text-2xl mb-[61px]" id="opinionsSection">
        What customers are saying
      </h2>
      <div className="pb-[52px]">
        <Carousel className="py-1 md:justify-center gap-4 md:gap-[47px]">
          {opinions.map((item, index) => (
            <Carousel.Item key={index} index={index} width="275px">
              <div className="p-5 shadow-md h-full border border-EF rounded-lg flex flex-col">
                <div className="flex gap-2 mb-[10px]">
                  {new Array(5).fill('').map((_, j) => (
                    <div key={j}>{j + 1 <= item.rating ? <IconFilledStar className='text-yellow-500' /> : <IconOutlinedStar />}</div>
                  ))}
                </div>
                <p className='grow'>"{item.description}"</p>
                <div className="flex items-center gap-[10px] mt-[27px]">
                  <div className='h-5 w-5 bg-slate-200 rounded-full	'>
                    <img src={item.img} alt="Perfil de persona" />
                  </div>
                  <div>{item.name}</div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
