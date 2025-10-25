import Container from '@src/shared/components/Container/Container';
import ImgMap from '@src/assets/images/map.png';

export const UbigeoSection = () => {
  return (
    <div className="bg-red-500">
        <Container>
          <section
            className="flex py-[125px] flex-col md:flex-row md:py-[100px] md:h-[807px] md:justify-between"
            aria-labelledby="ubigeoSection"
          >
            <div className="text-white md:basis-[408px]">
              <h2 className="text-4.5xl font-bold mb-[15px]" id="ubigeoSection">
                We Have Branches All Over The World
              </h2>
              <p className="mb-[120px] md:ml-3">
                The gradual accumulation of information about atomic and small-scale behaviour
                during the first quarter of the 20th century, which gave some indications about how
                small things do behave, produced an increasing confusion which was Heisenberg, and
                Born.
              </p>
            </div>
            <div className="md:pt-7">
              <picture>
                <img
                  src={ImgMap}
                  width={415}
                  className="w-[313px] md:w-auto mx-auto"
                  alt="Mapa del mundo"
                />
              </picture>
            </div>
          </section>
        </Container>
      </div>
  )
}
