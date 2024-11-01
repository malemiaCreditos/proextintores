import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <>
      <section id="testimonials" className="testimonials section">
        <div className="container section-title">
          {/* <div className="container section-title" data-aos="fade-up"> */}
          <h2>Equipa</h2>
          <p>Nossa Equipa</p>
        </div>

        <div className="container">
          <div className=" grid grid-cols-1 md:grid-cols-4">
            <div className="testimonial-item">
              <p>
                <i className=" bi bi-quote quote-icon-left"></i>
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <Image
                src="/avatar.png"
                className="testimonial-img"
                alt=""
                height={100}
                width={100}
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
            <div className="testimonial-item">
              <p>
                <i className=" bi bi-quote quote-icon-left"></i>
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <Image
                src="/avatar.png"
                className="testimonial-img"
                alt=""
                height={100}
                width={100}
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
            <div className="testimonial-item">
              <p>
                <i className=" bi bi-quote quote-icon-left"></i>
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <Image
                src="/avatar.png"
                className="testimonial-img"
                alt=""
                height={100}
                width={100}
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
            <div className="testimonial-item">
              <p>
                <i className=" bi bi-quote quote-icon-left"></i>
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <Image
                src="/avatar.png"
                className="testimonial-img"
                alt=""
                height={100}
                width={100}
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
