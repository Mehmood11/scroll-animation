import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Can I use Animify for free?",
      answer:
        "Yes, Animify offers a free plan with basic features. You can upgrade to a paid plan for additional functionality.",
    },
    {
      question: "Why should I upgrade to the Starter plan?",
      answer:
        "The Starter plan unlocks advanced features, including higher resolution exports and more customization options.",
    },
    {
      question: "How does workspace billing work?",
      answer:
        "Workspace billing is based on the number of active users and the features you use. You can manage your subscription in the billing settings.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time from your account settings. No additional charges will apply after cancellation.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied, you can request a full refund within 30 days of purchase.",
    },
  ];

  // Background gradients
  const gradient1 =
    "radial-gradient(43.69% 75.71% at 50% 44.52%, #13101A 0%, #0F0C18 50%, #0D0A17 100%)";
  const gradient2 =
    "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C1018 50%, #0A1017 100%)";

  return (
    <div className=" text-white py-20 px-6 relative">
      <div className="faq-circle"></div>

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden"
              style={{
                background: index % 2 === 0 ? gradient1 : gradient2,
              }}
            >
              {/* Accordion Header */}
              <button
                className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-light">{item.question}</h3>
                <span className="text-gray-400 text-2xl transform transition-transform duration-300">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 px-6 pb-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
