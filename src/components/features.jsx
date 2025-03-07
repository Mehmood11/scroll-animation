import React from "react";
import interfaceSvg from "../assets/interface.svg";
import collab from "../assets/collab.svg";
import fileCloud from "../assets/cloud-file.svg";
import lock from "../assets/lock.svg";
import privacyCloud from "../assets/privacy-cloud.svg";
import uploadCloud from "../assets/upload-cloud.svg";
import cloud from "../assets/cloud.svg";
import integration from "../assets/integration.svg";

const Features = () => {
  return (
    <section className="p-8 w-full">
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        <button className="rounded-3xl shadow-[inset_0px_-2px_16px_0px_#6B49FF99] text-white px-6 py-3 transition-colors">
          Amazing
        </button>
        <h1 class="text-3xl font-bold text-center mb-4 mt-2">
          Features and Benefits
        </h1>
        <p class="text-center w-150">
          Create, customize, and collaborate effortlessly with our intuitive
          platform. From simple edits to complex designs, bring your vision to
          life in no time.
        </p>
      </div>
      <div className="mt-4 items-center flex flex-col">
        <div className="flex w-full lg:w-2/3 gap-3 flex-col lg:flex-row">
          <div
            className="easy-to-use w-full lg:w-[60%] h-[330px] rounded-xl p-6 relative overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              background:
                "linear-gradient(117.8deg, #08152B 16.25%, #10141A 58.12%, #0D1014 100%)",
            }}
          >
            <h1 className="text-white text-md font-bold">
              Easy-to-Use interface
            </h1>
            <p className="text-sm text-[#BEBEBE] w-[300px] mt-1">
              Users can quickly start using the platform without needing a steep
              learning curve.
            </p>
            <div className="flex items-center mt-2 text-[#5EBCFF] cursor-pointer">
              <p className="mr-2">Try it now </p>
              <svg
                className="w-3 h-3 text-[#5EBCFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
            <img
              src={interfaceSvg}
              alt="interface"
              className="absolute -bottom-35 -right-10 h-135 z-10"
            />
            <div className="interface-circle-1"></div>
            <div className="interface-circle-2"></div>
          </div>
          <div
            className="collaboration w-full lg:w-[40%] h-[330px] rounded-xl p-6 relative overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{
              background:
                "linear-gradient(117.8deg, #08152B 16.25%, #10141A 58.12%, #0D1014 100%)",
            }}
          >
            <h1 className="text-white text-md font-bold relative z-10">
              Collaboration Tools
            </h1>
            <p className="text-sm text-[#BEBEBE] w-[300px] mt-1 z-10 relative">
              Explanation: If your product enables collaboration, emphasize the
              ability for teams to work together in real time.
            </p>
            <div className="flex items-center mt-2 text-[#5EBCFF] cursor-pointer relative z-10">
              <p className="mr-2">Try it now </p>
              <svg
                className="w-3 h-3 text-[#5EBCFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
            <img
              src={collab}
              alt="collab"
              className="absolute h-50 z-10 right-0 lg:right-5 w-[80%] md:w-[90%]"
            />
            <div className="collab-circle-1"></div>
            <div className="collab-circle-2"></div>
          </div>
        </div>
        <div className="flex w-full lg:w-2/3 gap-3 mt-3 flex-col lg:flex-row">
          <div
            className="easy-to-use  w-full lg:w-[50%] h-[500px] rounded-xl rel flex flex-col items-start justify-start p-8 relative overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              background:
                "linear-gradient(117.8deg, #08152B 16.25%, #10141A 58.12%, #0D1014 100%)",
            }}
          >
            <div className="relative flex items-center justify-center w-74 h-74 rounded-full self-center mb-6">
              {/* 🌩️ Central Cloud Icon */}
              {/* <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"> */}
              <img src={cloud} alt="Cloud" className="absolute top-[70px]" />
              {/* </div> */}

              {/* 🔵 Outer Orbit (Border Only) */}
              <div className="absolute w-full h-full border border-gray-800 rounded-full"></div>

              {/* 🔴 Inner Orbit (Smaller Border Only) */}
              <div className="absolute w-3/4 h-3/4 border border-gray-800 rounded-full"></div>

              {/* 🟢 Outer Orbit Icons */}
              <div className="absolute w-full h-full animate-spin-slow">
                <div className="absolute top-35 -left-10 transform -translate-y-1/2">
                  <img src={fileCloud} alt="fileCloud" />
                </div>
                <div className="absolute top-10 -right-10 transform -translate-x-1/2">
                  <img src={lock} alt="lock" />
                </div>
                <div className="absolute top-50 -right-5 transform -translate-y-1/2">
                  <img src={uploadCloud} alt="uploadCloud" />
                </div>
              </div>

              {/* 🟠 Inner Orbit Icons */}
              <div className="absolute w-3/4 h-3/4 animate-spin-slow">
                <div className="absolute top-8 left-2 transform -translate-y-1/2">
                  <img src={privacyCloud} alt="privacyCloud" />
                </div>
              </div>
            </div>

            <h1 className="text-white text-md font-bold relative z-10">
              Secure Cloud Storage
            </h1>
            <p className="text-sm text-[#BEBEBE] w-[300px] mt-1 z-10 relative">
              With cloud storage, users’ projects are automatically saved,
              ensuring their data is never lost.
            </p>
            <div className="flex items-center mt-2 text-[#5EBCFF] cursor-pointer relative z-10">
              <p className="mr-2">Try it now </p>
              <svg
                className="w-3 h-3 text-[#5EBCFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
            <div className="cloud-circle-1"></div>
            <div className="cloud-circle-2"></div>
          </div>
          <div
            className="easy-to-use  w-full lg:w-[50%] h-[500px] rounded-xl rel flex flex-col items-start justify-start p-8 relative overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{
              background:
                "linear-gradient(117.8deg, #08152B 16.25%, #10141A 58.12%, #0D1014 100%)",
            }}
          >
            <div className="relative flex items-center justify-center h-74 rounded-full self-center mb-6">
              <img src={integration} alt="integration" className="w-full" />
            </div>

            <h1 className="text-white text-md font-bold relative z-10">
              Wide Integration Support
            </h1>
            <p className="text-sm text-[#BEBEBE] w-[300px] mt-1 z-10 relative">
              The ability to integrate with third-party apps (e.g., Google
              Drive, Dropbox, Slack) is essential for users who rely on a suite
              of tools.
            </p>
            <div className="flex items-center mt-2 text-[#5EBCFF] cursor-pointer relative z-10">
              <p className="mr-2">Try it now </p>
              <svg
                className="w-3 h-3 text-[#5EBCFF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
            <div className="cloud-circle-1"></div>
            <div className="cloud-circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
