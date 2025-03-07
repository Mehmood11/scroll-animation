import React from 'react';

const Hero = () => {
  return (
    <div
      className="container mx-auto px-6 pt-32 pb-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Transform Concepts into,{" "}
          <span className="block">
            <span className="text-[#0099FF]">Dynamic</span> Animations
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Unleash your creativity with our intuitive animation tool. Create
          stunning videos and bring your vision to life in just a few clicks!
        </p>

        <div className="flex justify-center gap-4">
          <button className="rounded-xl shadow-[inset_0px_0px_8px_0px_#0099FF] text-white px-6 py-3 transition-colors">
            Try it now
          </button>
          <button
            className="relative rounded-xl text-white px-6 py-3 transition-colors"
            style={{
              background:
                "linear-gradient(249.49deg, #1F1F1F 8.6%, #191919 19.56%, #0F0F0F 44.25%)",
            }}
          >
            Book your demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
