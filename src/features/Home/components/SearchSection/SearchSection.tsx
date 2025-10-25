import Button from "@src/shared/components/Button/Button"
import Container from "@src/shared/components/Container/Container"
import { InputSearch } from "@src/shared/components/InputSearch/InputSearch"
import './SearchSection.scss';

export const SearchSection = () => {
  return (
    <section className="c-search-section" aria-labelledby="searchSection">
      <Container>
        <div className="c-search-section__container">
          <h2 className="c-search-section__title" id="searchSection">What insurance are you looking for?</h2>
          <InputSearch />
          <div className="c-search-section__button-container">
            <Button variant="outlined" inverse>All the categories</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
