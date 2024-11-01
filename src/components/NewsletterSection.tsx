export const NewsletterSection = () => {
  return (
    <>
      {" "}
      <section id="book-a-table" className="book-a-table section">
        <div className="container section-title">
          {/* <div className="container section-title" data-aos="fade-up"> */}
          <h2>Newsletter</h2>
          <p>Receba Novidades da Nossa Empresa</p>
        </div>

        <div className="container">
          {/* <div className="container" data-aos="fade-up" data-aos-delay="100"> */}
          <form
            action="/"
            // action="forms/book-a-table.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Nome"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Contacto"
                />
              </div>
              {/* <div className="col-lg-4 col-md-6">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="date"
                  placeholder="Date"
                />
              </div> */}
              {/* <div className="col-lg-4 col-md-6">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  id="time"
                  placeholder="Time"
                />
              </div> */}
              {/* <div className="col-lg-4 col-md-6">
                <input
                  type="number"
                  className="form-control"
                  name="people"
                  id="people"
                  placeholder="# of people"
                />
              </div> */}
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="text-center mt-3">
              <div className="loading">Carregando</div>
              <div className="error-message"></div>
              <div className="sent-message">Obrigado</div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
