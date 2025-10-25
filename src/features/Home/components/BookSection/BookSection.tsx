import Container from '@src/shared/components/Container/Container';
import ImgFamilyMobile from '@src/assets/images/family-mobile-cover.jpg';
import ImgFamilyMobileWebp from '@src/assets/images/family-mobile-cover.webp';
import ImgFamily from '@src/assets/images/family-cover.jpg';
import ImgFamilyWebp from '@src/assets/images/family-cover.webp';
import { BookForm } from '../BookForm/BookForm';

export const BookSection = () => {
  return (
    <Container>
      <section
        className="flex flex-col bg-white md:flex-row md:justify-between md:mx-auto max-w-[877px] md:mt-[-328px]"
        aria-labelledby="bookSection"
      >
        <div className="md:basis-[267px]">
          <picture>
            <source srcSet={ImgFamilyMobileWebp} type="image/webp" />
            <img
              className="md:hidden"
              src={ImgFamilyMobile}
              alt="Familia de 3 miembros cerrando los ojos y relajados"
            />
          </picture>
          <picture>
            <source srcSet={ImgFamilyWebp} type="image/webp" />
            <img
              className="hidden md:block"
              src={ImgFamily}
              alt="Familia de 3 miembros cerrando los ojos y relajados"
            />
          </picture>
        </div>
        <div className="px-7 md:grow md:py-10 md:px-[50px]">
          <h2 className="text-4.5xl font-bold	text-red-500 my-10 md:hidden" id="bookSection">
            Get A Free Quote Here
          </h2>
          <h2
            className="text-red-500 font-bold	text-2xl text-center pb-10 hidden md:block"
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
