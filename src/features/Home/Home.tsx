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
import './Home.scss';

export const Home = () => {
  return (
    <div className='c-home'>
      <Container>
        <div className="c-home__hero">
          <div className="c-home__content">
            <div className="c-home__text">
              <h1 className="c-home__title">
                Be safe wherever you go with K&K
              </h1>
              <p className="c-home__description">
                We provide insurance for Life & Health, <br /> Cars & Transport, Travel and more.
                Also services for the motorsports, sports, leisure, recreation and event industries
                since 1952.
              </p>
              <Button variant="filled" className="c-home__button">Get a Quote</Button>
            </div>
            <ul className="c-home__contact">
              <li className="c-home__contact-item">
                <b>Phone</b> 1-800-637-4757
              </li>
              <li className="c-home__contact-item">
                <b>Fax</b> 1-866-463-3230
              </li>
              <li className="c-home__contact-item">
                <b>Claims</b> 1-800-237-2917
              </li>
            </ul>
          </div>
          <picture className="c-home__image">
            <source srcSet={ImgPeopleMountainWebp} type="image/webp" />
            <img
              className="c-home__bg-image"
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
    </div>
  );
};
