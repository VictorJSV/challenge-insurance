import Container from '@src/shared/components/Container/Container';
import { BookSection } from './components/BookSection/BookSection';
import { OpinionsSection } from './components/OpinionsSection/OpinionsSection';
import { UbigeoSection } from './components/UbigeoSection/UbigeoSection';
import { SearchSection } from './components/SearchSection/SearchSection';

export const Home = () => {
  return (
    <div>
      <SearchSection />
      <Container>
        <OpinionsSection />
      </Container>
      <UbigeoSection />
      <BookSection />
    </div>
  );
};
