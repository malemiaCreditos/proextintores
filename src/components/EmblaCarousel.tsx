"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla bg-transparent h-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                {" "}
                <div className="swiper-slide">
                  <div className="row gy-4 event-item">
                    <div className="col-lg-6">
                      <Image
                        src="/img/events-slider/carousel11.jpg"
                        className="img-fluid"
                        alt=""
                        height={700}
                        width={700}
                      />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Serviços Relizados</h3>
                      <div className="price">
                        <p>
                          <span>Extintores</span>
                        </p>
                      </div>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      {/* <ul>
                        <li>
                          <i className="bi bi-check2-circle"></i>{" "}
                          <span className="text-sm">
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>{" "}
                          <span className="text-sm">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit.
                          </span>
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i>{" "}
                          <span className="text-sm">
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </span>
                        </li>
                      </ul> */}
                      <p className="text-sm">
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
