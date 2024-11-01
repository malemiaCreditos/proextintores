import Image from "next/image";

export const GallerySection = () => {
  return (
    <>
      <section id="gallery" className="gallery section">
        <div className="container section-title">
          {/* <div className="container section-title" data-aos="fade-up"> */}
          <h2>Galeria</h2>
          <p>Algumas Fotos dos Nossos Serviços</p>
        </div>

        <div className="container-fluid">
          {/* <div
          className="container-fluid"
          data-aos="fade-up"
          data-aos-delay="100"
        > */}
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo1.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo2.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo3.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo4.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo5.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo6.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo7.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo7.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="/img/gallery/fundo8.jpg"
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <Image
                    height={700}
                    width={700}
                    src="/img/gallery/fundo8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
