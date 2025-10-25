import Button from "@src/shared/components/Button/Button"
import Container from "@src/shared/components/Container/Container"
import './RecomendationSection.scss';

export const RecomendationSection = () => {
  return (
    <div className="c-recommendation">
      <Container>
        <section className="c-recommendation__content">
          <h2 className="c-recommendation__title">Recommendations to prevent COVID-19</h2>
          <p className="c-recommendation__description">The most common way to catch COVID-19 is from close contact with other people. Avoiding gatherings of people and practicing social distancing can help reduce the chances of exposure to the virus.</p>
          <Button variant="outlined" inverse className="c-recommendation__button">See more information</Button>
        </section>
      </Container>
    </div>
  )
}
