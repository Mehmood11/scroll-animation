import React from "react";
import blueCheck from "../assets/blue-check.png";
import purpleCheck from "../assets/purple-check.png";

const ExplorePlans = () => {
  return (
    <section
      className="py-10 relative mt-20 lg:mx-w-[1050]"
      style={{ maxWidth: "1050px" }}
    >
      {" "}
      {/* Adjust maxWidth here */}
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Explore all plans
        </h2>
        <div className="plan-circle"></div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div
            className="p-8 rounded-lg shadow-lg relative"
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              background:
                "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C121C 50%, #0A1017 100%)",
              borderTop: "2.4px solid",
              borderImageSource:
                "linear-gradient(90deg, #192235 0%, #0059FF 30%, #6FADFF 50%, #0059FF 70%, #192235 100%)",
              borderImageSlice: 1,
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
            <p className="text-xl text-white font-light mb-4">
              <b className="text-3xl font-bold">$0</b>/monthly
            </p>
            <p className="text-gray-400 mb-6 text-[14px]">
              Perfect for custom animation and motion graphics.
            </p>
            <button className="w-full md:text-[12px] lg:text-[14px] bg-white text-black cursor-pointer py-2 rounded-lg hover:bg-white transition duration-300">
              Sign Up with Enterprise
            </button>
            <ul className="space-y-4 mt-4">
              <li className="text-gray-400 flex items-center">
                <img src={blueCheck} className="mr-2" />
                Unlimited files
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Unlimited editors
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Expert video, GIF, Loftie
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                720p, 30fps
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Import from Figma
              </li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div
            className="p-8 rounded-lg shadow-lg"
            data-aos="zoom-out"
            data-aos-duration="1000"
            style={{
              background:
                "linear-gradient(180deg, #1B1430 0%, #0F0D16 50%, #1B1430 100%)",
              borderTop: "2.4px solid",
              borderImageSource:
                "linear-gradient(90deg, #0D0F15 0%, #9A56FF 30%, #E5D3FF 50%, #9A56FF 70%, #0D0F15 100%)",
              borderImageSlice: 1,
            }}
          >
            <div className="flex justify-between items-center flex-col lg:flex-row mb-2">
              <h3 className="text-xl font-bold text-white">Professional</h3>
              <button
                className="text-xs rounded-4xl shadow-[inset_0px_-2px_8px_0px_#6B49FFCC]
 text-white px-6 py-2 transition-colors"
                style={{
                  border: "0.8px solid",
                  borderImageSource:
                    "linear-gradient(180deg, rgba(107, 73, 255, 0.2) 44.93%, #6B49FF 100%)",
                }}
              >
                Popular
              </button>
            </div>
            <p className="text-xl text-white font-light mb-4">
              <b className="text-3xl font-bold">$20</b>/monthly
            </p>
            <p className="text-gray-400 mb-6">
              Perfect for custom animation and motion graphics.
            </p>
            <button className="w-full  md:text-[12px] lg:text-[14px] bg-white text-black cursor-pointer py-2 rounded-lg hover:bg-white transition duration-300">
              Sign Up with Professional
            </button>
            <ul className="space-y-4 mt-4">
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={purpleCheck} className="mr-2" />
                Everything in Free
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={purpleCheck} className="mr-2" />
                Unlimited folders
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={purpleCheck} className="mr-2" />
                No watermark
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={purpleCheck} className="mr-2" />
                HD export in 4K, 120fps
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={purpleCheck} className="mr-2" />
                Team libraries
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div
            className="p-8 rounded-lg shadow-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{
              background:
                "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C121C 50%, #0A1017 100%)",
              borderTop: "2.4px solid",
              borderImageSource:
                "linear-gradient(90deg, #192235 0%, #0059FF 30%, #6FADFF 50%, #0059FF 70%, #192235 100%)",
              borderImageSlice: 1,
            }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-white mb-4">Custom</p>
            <p className="text-gray-400 mb-6">
              Perfect for custom animation and motion graphics.
            </p>
            <button className="w-full md:text-[12px] lg:text-[14px] bg-white text-black cursor-pointer py-2 rounded-lg hover:bg-white transition duration-300">
              Let's Chat!
            </button>
            <ul className="space-y-4 mt-4">
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Everything in Studio
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Single sign-on (SSO)
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Pre-release features
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Personalized demo
              </li>
              <li className="text-gray-400 flex items-center">
                {" "}
                <img src={blueCheck} className="mr-2" />
                Priority support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePlans;
