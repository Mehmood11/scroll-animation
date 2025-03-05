import React from "react";

const GetStarted = () => {
  return (
    <div className=" text-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Get Started</h1>
      <p className="text-gray-400 text-lg mb-8">
        Holds no opinions on what's and how's. Build whatever makes sense to
        you.
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
  );
};

export default GetStarted;
