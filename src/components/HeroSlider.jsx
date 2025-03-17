import React from "react";
import Slider from "react-slick";
import slidesData from "../data/slidesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true
  };

  return (
    <section id="home" className="relative">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="relative h-[80vh] overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full auto-zoom"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="text-center text-white max-w-xl px-4 pointer-events-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 text-lg rounded-md transition"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
