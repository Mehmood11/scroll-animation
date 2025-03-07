import React from "react";
import userX from "../assets/userX.png";
import template from "../assets/template.png";
import message from "../assets/message.png";
import shield from "../assets/Shield.png";
import boost from "../assets/boost.png";
import upload from "../assets/Upload.png";

const WhyChooseUs = () => {
  return (
    <section
      className="py-16 relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Circle Background */}
      <div className="choose-us-circle"></div>

      <div className="container mx-auto px-4">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-white max-w-2xl mx-auto">
            Unlock the full potential of your business with exceptional features
            and unmatched performance.
          </p>
        </div>

        {/* Features Grid with Glassy Effect */}
        <div
          className="flex flex-wrap justify-center gap-8 lg:w-[1000px] xlg:w-[1200px] mx-auto rounded-[14px] p-8 backdrop-blur-lg"
          style={{
            background:
              "linear-gradient(90deg, rgba(13, 11, 20, 0.5) 0%, rgba(11, 16, 20, 0.9) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Feature 1: Intuitive User Experience */}
          <div className="flex-1 min-w-[260px] max-w-[310px] p-6 rounded-lg">
            <div className="text-center flex justify-center flex-col items-center">
              <img src={userX} alt="Experience" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Intuitive User Experience
              </h3>
              <p className="text-[#BEBEBE]">
                Start with a user-friendly interface designed for maximum ease
                and efficiency.
              </p>
            </div>
          </div>

          {/* Feature 2: Boost Productivity */}
          <div className="flex-1 min-w-[260px] max-w-[310px] p-6 rounded-lg">
            <div className="text-center flex justify-center flex-col items-center">
              <img src={boost} alt="Boost" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Boost Productivity
              </h3>
              <p className="text-[#BEBEBE]">
                Use pre-robust insulation to save time and enhance productivity.
              </p>
            </div>
          </div>

          {/* Feature 3: Customizable Templates */}
          <div className="flex-1 min-w-[260px] max-w-[310px] p-6 rounded-lg">
            <div className="text-center flex justify-center flex-col items-center">
              <img src={template} alt="Template" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Customizable Templates
              </h3>
              <p className="text-[#BEBEBE]">
                Get ready-made customizable templates for your projects.
              </p>
            </div>
          </div>

          {/* Feature 4: 24/7 Support */}
          <div className="flex-1 min-w-[260px] max-w-[310px] p-6 rounded-lg">
            <div className="text-center flex justify-center flex-col items-center">
              <img src={message} alt="Support" />
              <h3 className="text-xl font-semibold text-white mb-2">
                24/7 Support
              </h3>
              <p className="text-[#BEBEBE]">
                Get instant assistance anytime with our intelligent,
                always-available support.
              </p>
            </div>
          </div>

          {/* Feature 5: Data Security & Compliance */}
          <div className="flex-1 min-w-[260px] max-w-[310px] p-6 rounded-lg">
            <div className="text-center flex justify-center flex-col items-center">
              <img src={shield} alt="shield" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Data Security & Compliance
              </h3>
              <p className="text-[#BEBEBE]">
                Safeguard your experience with industry-leading standards.
              </p>
            </div>
          </div>

          {/* Feature 6: High-Quality Export */}
          <div className="flex-1 min-w-[260px] max-w-[310px] p-6 rounded-lg">
            <div className="text-center flex justify-center flex-col items-center">
              <img src={upload} alt="Upload" />
              <h3 className="text-xl font-semibold text-white mb-2">
                High-Quality Export
              </h3>
              <p className="text-[#BEBEBE]">
                High-quality export options allow users to download their
                content in formats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
