import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const EventsSection: React.FC = () => {
  return (
    <>
      <section id="events" className="events section">
        <div className="img slider-bg bg-center bg-no-repeat h-screen w-full bg-[url('/img/events-slider/carouselFundo.jpg')]"></div>

        <div className="container">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};
