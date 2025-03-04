const Hero = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16">
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
          <button className="relative rounded-xl text-white px-6 py-3 transition-colors before:absolute before:inset-0 before:rounded-xl before:p-[0.8px] before:bg-gradient-to-b before:from-white/32 before:via-white/12 before:to-white/12 before:-z-10 hover:before:bg-white/10">
            Book your demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
