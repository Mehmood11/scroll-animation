import React, { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    renderMode: "performance",
    drag: false,
    breakpoints: {
      // Small screens (up to 640px)
      "(max-width: 640px)": {
        slides: { perView: 2, spacing: 10 }, // Show 2 logos with less spacing
      },
      // Medium screens (641px to 1024px)
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 4, spacing: 15 }, // Show 4 logos with medium spacing
      },
      // Large screens (1025px and above)
      "(min-width: 1025px)": {
        slides: { perView: 6, spacing: 20 }, // Show 6 logos with default spacing
      },
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(0, true, { duration: 1000 });
      const interval = setInterval(() => {
        if (instanceRef.current) {
          instanceRef.current.moveToIdx(
            instanceRef.current.track.details.abs + 1,
            true,
            { duration: 10000 }
          );
        }
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [instanceRef]);

  return (
    <div className="w-2/3 py-6 overflow-hidden relative mt-30">
      <h2 className="text-center text-[20px] font-[500] mb-4 text-[background: #BEBEBE;]">
        Our Clients
      </h2>

      <div className="carousel-container">
        <div ref={sliderRef} className="keen-slider flex items-center">
          {logos.map((logo, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <img
                src={logo}
                alt="Client Logo"
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
