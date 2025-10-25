import Button from "@src/shared/components/Button/Button"
import Container from "@src/shared/components/Container/Container"

export const RecomendationSection = () => {
  return (
    <div className="bg-red-500 text-white">
      <Container>
        <section className="my-11 md:my-[57px] max-w-[560px] mx-auto text-center">
          <h2 className="font-medium text-lg md:text-2xl mb-[15px]">Recommendations to prevent COVID-19</h2>
          <p className="mb-[15px]">The most common way to catch COVID-19 is from close contact with other people. Avoiding gatherings of people and practicing social distancing can help reduce the chances of exposure to the virus.</p>
          <Button variant="outlined" inverse>See more information</Button>
        </section>
      </Container>
    </div>
  )
}
