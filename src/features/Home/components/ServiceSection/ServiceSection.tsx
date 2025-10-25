import Button from '@src/shared/components/Button/Button';
import ImgHappyFamily from '@src/assets/images/happy-family.jpg';

export const ServiceSection = () => {
  return (
    <section
      className="mt-6 mb-20 md:mt-[109px] md:mb-[133px]"
      aria-labelledby="serviceSection"
    >
      <h2 className="text-red-500 text-2xl mb-[15px] text-center md:text-left" id="serviceSection">
        Our Services
      </h2>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className="max-w-[451px] text-base order-1 md:order-none">
          <p className="font-bold mb-6 mt-5 md:mt-0">
            For over 65 years, we have been recognized as the leading provider of sports, leisure
            and entertainment insurance products.
          </p>
          <p className="mb-4">
            We perform a variety of traditional insurance company functions on behalf of the
            insurance companies we represent, allowing us to provide exceptional service in: program
            development, sales & marketing, underwriting, policy issuance & administration, loss
            control and claims.
          </p>
          <Button variant="outlined" className='max-w-44 w-full md:max-w-fit md:w-fit'>About us</Button>
        </div>
        <div className="md:mt-[-55px]">
          <picture>
            <img src={ImgHappyFamily} alt="Familia de 3 miembros que está feliz" />
          </picture>
        </div>
      </div>
    </section>
  );
};
