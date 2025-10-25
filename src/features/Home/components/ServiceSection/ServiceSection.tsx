import Button from '@src/shared/components/Button/Button';
import ImgHappyFamily from '@src/assets/images/happy-family.jpg';
import ImgHappyFamilyWeb from '@src/assets/images/happy-family.webp';
import './ServiceSection.scss';

export const ServiceSection = () => {
  return (
    <section
      className="c-service"
      aria-labelledby="serviceSection"
    >
      <h2 className="c-service__title" id="serviceSection">
        Our Services
      </h2>
      <div className='c-service__content'>
        <div className="c-service__text">
          <p className="c-service__highlight">
            For over 65 years, we have been recognized as the leading provider of sports, leisure
            and entertainment insurance products.
          </p>
          <p className="c-service__description">
            We perform a variety of traditional insurance company functions on behalf of the
            insurance companies we represent, allowing us to provide exceptional service in: program
            development, sales & marketing, underwriting, policy issuance & administration, loss
            control and claims.
          </p>
          <Button variant="outlined" className='c-service__button'>About us</Button>
        </div>
        <div className="c-service__image">
          <picture>
            <source srcSet={ImgHappyFamilyWeb} type="image/webp" />
            <img src={ImgHappyFamily} alt="Familia de 3 miembros que está feliz" />
          </picture>
        </div>
      </div>
    </section>
  );
};
