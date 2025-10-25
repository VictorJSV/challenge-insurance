import Container from '@src/shared/components/Container/Container';
import ImgFamilyMobile from '@src/assets/images/family-mobile-cover.jpg';
import ImgFamilyMobileWebp from '@src/assets/images/family-mobile-cover.webp';
import ImgFamily from '@src/assets/images/family-cover.jpg';
import ImgFamilyWebp from '@src/assets/images/family-cover.webp';
import { BookForm } from '../BookForm/BookForm';
import './BookSection.scss';

export const BookSection = () => {
  return (
    <Container>
      <section
        className="c-book-section"
        aria-labelledby="bookSection"
      >
        <div className="c-book-section__image">
          <picture>
            <source srcSet={ImgFamilyMobileWebp} type="image/webp" />
            <img
              className="c-book-section__img c-book-section__img--mobile"
              src={ImgFamilyMobile}
              alt="Familia de 3 miembros cerrando los ojos y relajados"
            />
          </picture>
          <picture>
            <source srcSet={ImgFamilyWebp} type="image/webp" />
            <img
              className="c-book-section__img c-book-section__img--desktop"
              src={ImgFamily}
              alt="Familia de 3 miembros cerrando los ojos y relajados"
            />
          </picture>
        </div>
        <div className="c-book-section__content">
          <h2 className="c-book-section__title c-book-section__title--mobile" id="bookSection">
            Get A Free Quote Here
          </h2>
          <h2
            className="c-book-section__title c-book-section__title--desktop"
            id="bookSection"
          >
            Book Appointment
          </h2>
          <BookForm />
        </div>
      </section>
    </Container>
  );
};
