import Container from '@src/shared/components/Container/Container';
import { BookSection } from './components/BookSection/BookSection';
import { OpinionsSection } from './components/OpinionsSection/OpinionsSection';
import { UbigeoSection } from './components/UbigeoSection/UbigeoSection';
import { SearchSection } from './components/SearchSection/SearchSection';
import { ServiceSection } from './components/ServiceSection/ServiceSection';
import { InsuranceListSection } from './components/InsuranceListSection/InsuranceListSection';
import { RecomendationSection } from './components/RecomendationSection/RecomendationSection';
import ImgPeopleMountain from '@src/assets/images/people-mountain.jpg';
import ImgPeopleMountainWebp from '@src/assets/images/people-mountain.webp';
import Button from '@src/shared/components/Button/Button';

export const Home = () => {
  return (
    <>
      <Container>
        <div className="relative">
          <div className="flex mt-4 md:mt-[38px] pb-[55px] md:h-[480px] justify-between flex-col md:items-end md:flex-row">
            <div className="max-w-[235px] md:max-w-[518.43px] md:mb-16">
              <h1 className="font-black text-2xl md:text-6.5xl text-red-500 mb-[30px] pl-2 md:pl-0">
                Be safe wherever you go with K&K
              </h1>
              <p className="mb-[15px] max-w-[335px] text-base text-white bg-black-transparent p-2 rounded md:p-0 md:bg-transparent md:text-neutral-300 leading-none">
                We provide insurance for Life & Health, <br /> Cars & Transport, Travel and more.
                Also services for the motorsports, sports, leisure, recreation and event industries
                since 1952.
              </p>
              <Button variant="filled">Get a Quote</Button>
            </div>
            <ul className="flex gap-2 md:gap-4 text-white justify-center bg-black-transparent p-1 text-[10px] mt-2 md:text-sm md:p-0 md:bg-transparent md:mt-[33px] md:text-neutral-300">
              <li>
                <b>Phone</b> 1-800-637-4757
              </li>
              <li>
                <b>Fax</b> 1-866-463-3230
              </li>
              <li>
                <b>Claims</b> 1-800-237-2917
              </li>
            </ul>
          </div>
          <picture>
            <source srcSet={ImgPeopleMountainWebp} type="image/webp" />
            <img
              className="absolute -top-4 -z-10 max-w-fit w-[550px] scale-x-[-1] left-[-90px] md:left-auto md:scale-x-[1] md:top-0 md:w-auto md:right-[-44px]"
              src={ImgPeopleMountain}
              width={646}
              alt="2 personas mirando una montaña"
            />
          </picture>
        </div>
      </Container>
      <RecomendationSection />
      <Container>
        <InsuranceListSection />
      </Container>
      <SearchSection />
      <Container>
        <ServiceSection />
        <OpinionsSection />
      </Container>
      <UbigeoSection />
      <BookSection />
    </>
  );
};
