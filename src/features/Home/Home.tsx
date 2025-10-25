import Container from '@src/shared/components/Container/Container';
import { BookSection } from './components/BookSection/BookSection';
import { OpinionsSection } from './components/OpinionsSection/OpinionsSection';
import { UbigeoSection } from './components/UbigeoSection/UbigeoSection';
import { SearchSection } from './components/SearchSection/SearchSection';
import { ServiceSection } from './components/ServiceSection/ServiceSection';
import { InsuranceListSection } from './components/InsuranceListSection/InsuranceListSection';
import { RecomendationSection } from './components/RecomendationSection/RecomendationSection';

export const Home = () => {
  return (
    <div>
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
