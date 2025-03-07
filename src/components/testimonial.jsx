import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import user from "../assets/user.png";
const animation = { duration: 20000, easing: (t) => t };

const testimonials = [
  {
    name: "John M.",
    role: "Operations Lead",
    quote:
      "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate with our current processes. Highly recommended!",
  },
  {
    name: "Mike T.",
    role: "Product Designer",
    quote:
      "I've tried a lot of similar tools, but this one stands out. The features are top-notch, and the customer support is fantastic.",
  },
  {
    name: "David R.",
    role: "Product Manager",
    quote: "I've tried a lot of similar features are top-notch, fantastic.",
  },
  {
    name: "Kevin B.",
    role: "Proclaimer",
    quote:
      "I can't imagine going back to the old way of doing things. This product has made everything smoother and more efficient. It's a game changer!",
  },
  {
    name: "Robert S.",
    role: "Project Manager",
    quote:
      "Incredible tool! I was able to automate so many tasks that used to take hours. It's a real time-saver!",
  },
];

const TestimonialsCarousel = () => {
  // Carousel 1: Left to Right
  const [sliderRef1] = useKeenSlider({
    loop: true, // Enable infinite looping
    mode: "free-snap", // Smooth scrolling with snapping
    renderMode: "performance", // Optimize for performance
    drag: true, // Enable dragging
    slides: {
      perView: 3.5, // Show 3.5 slides at a time
      spacing: 16, // Spacing between slides
      //   origin: "center", // Center the slides
    },
    breakpoints: {
      // Small screens (up to 640px)
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 }, // Show 2 logos with less spacing
      },
      // Medium screens (641px to 1024px)
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 }, // Show 4 logos with medium spacing
      },
    },
    created(s) {
      // Start the auto-scroll animation (left to right)
      s.moveToIdx(s.track.details.length, true, animation);
    },
    updated(s) {
      // Continue the auto-scroll animation
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      // Loop back to the beginning seamlessly
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  // Carousel 2: Right to Left
  const [sliderRef2] = useKeenSlider({
    loop: true, // Enable infinite looping
    mode: "free-snap", // Smooth scrolling with snapping
    renderMode: "performance", // Optimize for performance
    drag: true, // Enable dragging
    slides: {
      perView: 3.5, // Show 3.5 slides at a time
      spacing: 16, // Spacing between slides
      //   origin: "center", // Center the slides
    },
    breakpoints: {
      // Small screens (up to 640px)
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 }, // Show 2 logos with less spacing
      },
      // Medium screens (641px to 1024px)
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 }, // Show 4 logos with medium spacing
      },
    },
    created(s) {
      // Start the auto-scroll animation (right to left)
      s.moveToIdx(-s.track.details.length, true, animation);
    },
    updated(s) {
      // Continue the auto-scroll animation
      s.moveToIdx(s.track.details.abs - 1, true, animation);
    },
    animationEnded(s) {
      // Loop back to the beginning seamlessly
      s.moveToIdx(s.track.details.abs - 1, true, animation);
    },
  });

  return (
    <div className="testimonials-carousel">
      <div className="text-white py-20 px-6 relative">
        <div className="text-white py-20 px-6 relative">
          <div
            className="absolute top-[340px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-204 h-204"
            >
              <defs>
                {/* Gradient for the heart fill */}
                <linearGradient
                  id="heartGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#0F0C18", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#0D0A17", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#110828", stopOpacity: 1 }}
                  />
                </linearGradient>
                {/* Gradient for the heart border */}
                <linearGradient
                  id="heartBorderGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#3F325F", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#110828", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              {/* Heart with gradient fill and border */}
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="url(#heartGradient)"
                stroke="url(#heartBorderGradient)"
                strokeWidth=".04" // Adjust the border thickness
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
        <div className="testimonial-circle"></div>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Our Customers
        </h2>
        <p className="text-white text-center mb-12">What people say about us</p>
      </div>

      <div
        className="w-[100vw] relative testimonial-container"
        style={{ backgroundColor: "#121212" }}
      >
        {/* Carousel 1: Left to Right */}
        <div ref={sliderRef1} className="keen-slider mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide rounded-2xl relative overflow-hidden" // Add relative and overflow-hidden
              style={{
                background:
                  "linear-gradient(180deg, #0F0C18 0%, #0D0A17 50%, #110828 100%)",
              }}
            >
              {/* Pseudo-element for the border */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: "0.8px solid transparent",
                  background:
                    "linear-gradient(180deg, #3F325F 0%, rgba(63, 50, 95, 0) 100%) border-box",
                  mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              ></div>
              <div className="p-6 rounded-lg relative z-10">
                <div className="flex items-center">
                  <img src={user} />
                  <div className="flex flex-col ml-3">
                    <p className="text-white font-[500]">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic mt-3">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel 2: Right to Left */}
        <div ref={sliderRef2} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide rounded-2xl relative overflow-hidden" // Add relative and overflow-hidden
              style={{
                background:
                  "linear-gradient(180deg, #0F0C18 0%, #0D0A17 50%, #110828 100%)",
              }}
            >
              {/* Pseudo-element for the border */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: "0.8px solid transparent",
                  background:
                    "linear-gradient(180deg, #3F325F 0%, rgba(63, 50, 95, 0) 100%) border-box",
                  mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              ></div>
              <div className="p-6 rounded-lg relative z-10">
                <div className="flex items-center">
                  <img src={user} />
                  <div className="flex flex-col ml-3">
                    <p className="text-white font-[500]">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic mt-3">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
