export const HeroSection = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <div className="img bg-cover bg-center bg-no-repeat h-screen w-full bg-[url('/img/hero-bombeiros.jpg')]"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
              <h2>
                Bem Vindo a <span>Pro Extintores</span>
              </h2>
              <p>
                Garanta a segurança do seu ambiente com extintores certificados
                e de alto desempenho. Nossa linha de extintores é projetada para
                proteger você, sua equipe e seus bens em situações de
                emergência.
              </p>
              {/* <h2 data-aos="fade-up" data-aos-delay="100">
                Welcome to <span>Restaurantly</span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Delivering great food for more than 18 years!
              </p> */}
              <div className="d-flex mt-4">
                <a href="#menu" className="cta-btn">
                  Solicitar Serviço
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
              <a href="#" className="glightbox pulsating-play-btn"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
