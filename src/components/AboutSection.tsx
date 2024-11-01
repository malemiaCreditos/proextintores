import Image from "next/image";

export const AboutSection = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          {/* <div className="container" data-aos="fade-up" data-aos-delay="100"> */}
          <div className="row gy-4">
            <div className="col-lg-6 order-1 order-lg-2">
              <Image
                src="/img/aboutfront.jpg"
                className="img-fluid about-img"
                alt=""
                height={700}
                width={700}
              />
            </div>
            <div className="col-lg-6 order-2 order-lg-1 content">
              <h3>Vamos Proteger o que é Importante para Você</h3>
              <p className="fst-italic">
                Acreditamos em um futuro onde todos os ambientes sejam
                preparados para emergências de incêndio, promovendo espaços mais
                seguros e pessoas mais capacitadas para lidar com situações
                críticas.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all"></i>{" "}
                  <span>
                    Integridade: Atuamos com transparência e ética em todos os
                    nossos serviços.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i>{" "}
                  <span>
                    Qualidade: Oferecemos produtos e serviços que passam por
                    rigorosos controles de qualidade.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i>{" "}
                  <span>
                    Responsabilidade: A segurança de nossos clientes é nossa
                    prioridade.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i>{" "}
                  <span>
                    Inovação: Estamos sempre buscando as melhores tecnologias e
                    práticas para garantir uma proteção mais eficiente.
                  </span>
                </li>
              </ul>
              <p>
                Na Pro Extintores, estamos aqui para oferecer mais do que
                equipamentos – oferecemos tranquilidade e proteção. Entre em
                contato conosco e conheça as soluções que vão ao encontro das
                suas necessidades de segurança.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
