import Image from "next/image";

export const ProductSection = () => {
  return (
    <>
      <section id="menu" className="menu section">
        <div className="container section-title">
          {/* <div className="container section-title" data-aos="fade-up"> */}
          <h2>Produtos</h2>
          <p>Confira os Nossos Produtos</p>
        </div>

        <div
          className="container isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row">
            {/* <div className="row" data-aos="fade-up" data-aos-delay="100"> */}
            <div className="col-lg-12 d-flex justify-content-center">
              <ul className="menu-filters isotope-filters">
                <li data-filter="*" className="filter-active">
                  Tudo
                </li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>

          <div className="row isotope-container">
            {/* <div
            className="row isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          > */}
            <div className="col-lg-6 menu-item isotope-item filter-starters">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto3.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-specialty">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto4.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-starters">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto4.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-salads">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto3.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-specialty">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto3.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Grilled chicken with provolone, artichoke hearts, and roasted
                red pesto
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-starters">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto3.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-salads">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto3.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Fresh spinach, crisp romaine, tomatoes, and Greek olives
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-salads">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto3.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Fresh spinach with mushrooms, hard boiled egg, and warm bacon
                vinaigrette
              </div>
            </div>

            <div className="col-lg-6 menu-item isotope-item filter-specialty">
              <Image
                height={80}
                width={80}
                src="/img/menu/Produto3.png"
                className="menu-img"
                alt=""
              />
              <div className="menu-content">
                <a href="#">Rolo de Mangueira</a>
                <span>00.00 Mt</span>
              </div>
              <div className="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky
                roll
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
