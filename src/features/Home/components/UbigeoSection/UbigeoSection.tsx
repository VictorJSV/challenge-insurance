import Container from '@src/shared/components/Container/Container';
import ImgMap from '@src/assets/images/map.png';
import ImgMapWeb from '@src/assets/images/map.webp';
import './UbigeoSection.scss';

export const UbigeoSection = () => {
  return (
    <div className="c-ubigeo">
        <Container>
          <section
            className="c-ubigeo__content"
            aria-labelledby="ubigeoSection"
          >
            <div className="c-ubigeo__text">
              <h2 className="c-ubigeo__title" id="ubigeoSection">
                We Have Branches All Over The World
              </h2>
              <p className="c-ubigeo__description">
                The gradual accumulation of information about atomic and small-scale behaviour
                during the first quarter of the 20th century, which gave some indications about how
                small things do behave, produced an increasing confusion which was Heisenberg, and
                Born.
              </p>
            </div>
            <div className="c-ubigeo__image">
              <picture>
                <source srcSet={ImgMapWeb} type="image/webp" />
                <img
                  src={ImgMap}
                  width={415}
                  className="c-ubigeo__map"
                  alt="Mapa del mundo"
                />
              </picture>
            </div>
          </section>
        </Container>
      </div>
  )
}
