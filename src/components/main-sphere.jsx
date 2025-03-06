import React, { useState } from "react";

import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import AnimatedSphere from "./animated-sphere";

const MainSphere = () => {
  const [activeTab, setActiveTab] = useState("Layers");
  const [activeRightTab, setActiveRightTab] = useState("Design");
  const [expandedSection, setExpandedSection] = useState("Fill");

  const toggleSection = (item) => {
    setExpandedSection((prev) => (prev === item ? "" : item));
  };
  return (
    <div className="w-full flex justify-center items-stretch gap-4 relative">
      <div className="sphere-circle"></div>
      <div className="sphere-circle2"></div>

      <div
        className="left-div w-[280px] bg-[#090b10]/90 rounded-2xl overflow-hidden relative"
        style={{
          border: "1px solid",
          borderImage:
            "linear-gradient(166.07deg, #192235 27.69%, #0059FF 43.28%, #6FADFF 55.1%, #0059FF 66.44%, #192235 81.56%) 1",
          maskImage: "linear-gradient(white, white)", // Ensure border respects border-radius
          WebkitMaskImage: "linear-gradient(white, white)",
        }}
      >
        {/* Tabs */}
        <div className="flex items-center px-4 py-3 border-b border-white/[0.08]">
          <button
            onClick={() => setActiveTab("Layers")}
            className={`p-2 text-sm font-medium mr-4 ${
              activeTab === "Layers"
                ? "bg-[#2C2C2E] rounded text-white/90"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            Layers
          </button>
          <button
            onClick={() => setActiveTab("Items")}
            className={`p-2 text-sm font-medium ${
              activeTab === "Items"
                ? "bg-[#2C2C2E] rounded text-white/90"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            Items
          </button>
        </div>

        {/* Options List */}
        <div className="p-2 space-y-1">
          {/* Scene Option */}
          <div className="flex items-center justify-between p-2 bg-[#2C2C2E] rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center bg-[#0066FF] rounded-sm">
                <svg
                  class="w-2 h-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 10 16"
                >
                  <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                </svg>
              </div>
              <span className="text-white/80 text-sm">Scene</span>
            </div>
            <svg
              className="w-4 h-4 text-white/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <div className="shadow-[inset_0px_0px_8px_0px_#2E2E2EAD] bg-[radial-gradient(59.99%_59.99%_at_50%_50%,#262626_0%,#191919_100%)] rounded-lg p-2 space-y-1">
            {/* Rectangle Option */}
            <div className="flex items-center gap-2 p-2 hover:bg-[#2C2C2E]/50 rounded-lg">
              <div className="w-4 h-4 border border-white/20 rounded-sm"></div>
              <span className="text-white/60 text-sm">Rectangle</span>
            </div>

            {/* User Interface Option */}
            <div className="flex items-center gap-2 p-2 hover:bg-[#2C2C2E]/50 rounded-lg">
              <span className="w-4 h-4 flex items-center justify-center text-white/60 text-xs">
                T
              </span>
              <span className="text-white/60 text-sm">User Interface</span>
            </div>

            {/* Image Option */}
            <div className="flex items-center gap-2 p-2 hover:bg-[#2C2C2E]/50 rounded-lg">
              <svg
                className="w-4 h-4 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-white/60 text-sm">Image</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sphere-container w-[300px] h-[300px] relative">
        <div className="sphere w-full h-full rounded-full animate-spin-slow relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0066FF] to-[#4D9FFF] opacity-80"></div>

          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="particles absolute inset-0 opacity-50"></div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
        </div>
      </div> */}
      <AnimatedSphere />
      <div
        className="right-div w-[280px] bg-[#090b10]/90 rounded-2xl overflow-hidden relative"
        style={{
          border: "1px solid",
          borderImage:
            "linear-gradient(166.07deg, #192235 27.69%, #0059FF 43.28%, #6FADFF 55.1%, #0059FF 66.44%, #192235 81.56%) 1",
          maskImage: "linear-gradient(white, white)", // Ensure border respects border-radius
          WebkitMaskImage: "linear-gradient(white, white)",
        }}
      >
        {/* Design/Animate Tabs */}
        <div className="p-4">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveRightTab("Design")}
              className={`px-4 flex-1 py-1.5 rounded-lg text-sm ${
                activeRightTab === "Design"
                  ? "bg-[#2C2C2E] rounded text-white/90"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveRightTab("Animate")}
              className={`px-4 flex-1 py-1.5 text-sm ${
                activeRightTab === "Animate"
                  ? "bg-[#2C2C2E] rounded text-white/90"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Animate
            </button>
          </div>

          {/* Tool Groups */}
          <div className="flex justify-between mb-6">
            {/* Horizontal Alignment */}
            <div className="flex p-1 bg-[#0066FF]/20 rounded-lg shadow-[inset_0px_0px_6px_0px_rgba(68,133,254,0.5)]">
              <button className="p-1 text-white/60 border-r-[0.67px] border-[rgba(68,133,254,0.2)]">
                <img src={icon1} className="h-4" />
              </button>
              <button className="p-1 text-white/60 border-r-[0.67px] border-[rgba(68,133,254,0.2)]">
                <img src={icon2} className="h-4" />
              </button>
              <button className="p-1 text-white/60">
                <img src={icon3} className="h-4" />
              </button>
            </div>

            {/* Vertical Alignment */}
            <div className="flex p-1 bg-[#0066FF]/20 rounded-lg shadow-[inset_0px_0px_6px_0px_rgba(68,133,254,0.5)]">
              <button className="p-1 text-white/60  rotate-90 border-t-[0.67px] border-[rgba(68,133,254,0.2)]">
                <img src={icon1} className="h-4" />
              </button>
              <button className="p-1 text-white/60  rotate-90 border-t-[0.67px] border-[rgba(68,133,254,0.2)]">
                <img src={icon2} className="h-4" />
              </button>
              <button className="p-1 text-white/60  rotate-90">
                <img src={icon3} className="h-4" />
              </button>
            </div>
          </div>

          {/* Layout Section */}
          <div className="mb-6">
            <h3 className="text-white/80 text-sm mb-2">Layout</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <label className="text-white/40 text-xs">X</label>
                <input
                  type="text"
                  value="197"
                  className="w-[45px] bg-[#2C2C2E] rounded-lg px-2 py-1 text-white/90 text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-white/40 text-xs">Y</label>
                <input
                  type="text"
                  value="806"
                  className="w-[45px] bg-[#2C2C2E] rounded-lg px-2 py-1 text-white/90 text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-white/40 text-xs">Width</label>
                <input
                  type="text"
                  value="480"
                  className="w-[45px] bg-[#2C2C2E] rounded-lg px-2 py-1 text-white/90 text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-white/40 text-xs">Height</label>
                <input
                  type="text"
                  value="320"
                  className="w-[45px] bg-[#2C2C2E] rounded-lg px-2 py-1 text-white/90 text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-white/40 text-xs">Angle</label>
                <input
                  type="text"
                  value="0°"
                  className="w-[45px] bg-[#2C2C2E] rounded-lg px-2 py-1 text-white/90 text-sm"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-white/40 text-xs">Radius</label>
                <input
                  type="text"
                  value="0"
                  className="w-[45px] bg-[#2C2C2E] rounded-lg px-2 py-1 text-white/90 text-sm"
                />
              </div>
            </div>
          </div>

          <hr className="my-7 h-[1px] border-t-0 bg-neutral-100 dark:bg-white/10" />

          {/* Opacity Section */}
          <div className="">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/80 text-sm">Opacity</span>
              <input
                type="text"
                value="100"
                className="w-1/3 bg-[#2C2C2E] rounded-lg px-2 py-1 text-white/90 text-sm"
              />
            </div>
          </div>

          <hr class="my-7 h-[1px] border-t-0 bg-neutral-100 dark:bg-white/10" />

          {/* Collapsible Sections */}
          <div
            className={`${expandedSection === "" ? "space-y-2" : "space-y-4"}`}
          >
            {["Fill", "Stroke", "Shadow", "Blur"].map((item) => (
              <div
                key={item}
                className={`shadow-[inset_0px_0px_8px_0px_#36363A]
 p-3 rounded-md transition-transform duration-300 ease-in-out ${
   expandedSection === item ? "rotate-5" : "rotate-0"
 }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(item)}
                >
                  <span className="text-white/80 text-sm">{item}</span>
                  <span
                    className={`text-white/40 transition-transform duration-300 ${
                      expandedSection === item ? "rotate-45" : "rotate-0"
                    } transform`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedSection === item
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-[#2C2C2E] rounded-lg p-2 mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-sm ${
                            item === "Fill"
                              ? "bg-[#0099FF]"
                              : item === "Stroke"
                              ? "bg-[#FF6B00]"
                              : item === "Shadow"
                              ? "bg-[#000000]"
                              : "bg-[#00FF94]"
                          }`}
                        ></div>
                        <span className="text-white/60 text-sm">
                          {item === "Fill"
                            ? "0099FF"
                            : item === "Stroke"
                            ? "FF6B00"
                            : item === "Shadow"
                            ? "000000"
                            : "00FF94"}
                        </span>
                      </div>
                      <span className="text-white/80 text-sm">
                        {item === "Fill"
                          ? "100%"
                          : item === "Stroke"
                          ? "2px"
                          : item === "Shadow"
                          ? "20%"
                          : "40%"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSphere;
