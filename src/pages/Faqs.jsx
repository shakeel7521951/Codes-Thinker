import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqsData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, data science solutions, WordPress customization, and UI/UX design tailored to client needs.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary but typically range from 2 to 6 weeks depending on complexity and requirements.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide maintenance, updates, and technical support after your project goes live.",
  },
  {
    question: "Can I get a custom design for my brand?",
    answer:
      "Absolutely. We create custom designs that align with your brand identity and audience.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Simply contact us through the form or email. We’ll schedule a free consultation to understand your goals.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-12 px-4 md:px-16 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-gray-600 text-sm">Have You Any Question</p>
        <h1 className="text-2xl md:text-4xl font-bold">
          <span className="text-[#0F00AA]">Frequently</span> Asked Questions
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Accordion */}
        <div className="md:w-1/2 w-full">
          {faqsData.map((item, idx) => (
            <div
              key={idx}
              className="mb-4 overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left p-4 bg-white rounded-lg shadow hover:bg-gray-100 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-gray-800 flex justify-between items-center">
                  {item.question}
                  <span
                    className={`transition-transform ${
                      activeIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </span>
                </h3>
              </button>
              <div
                ref={(el) => (contentRefs.current[idx] = el)}
                style={{
                  maxHeight:
                    activeIndex === idx
                      ? contentRefs.current[idx]?.scrollHeight + "px"
                      : "0px",
                }}
                className="transition-all duration-500 ease-in-out overflow-hidden bg-white border-l-4 border-[#0F00AA] text-gray-700 rounded-b-lg shadow-inner px-4"
              >
                <p className="py-3">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/home/faqs.png"
            alt="FAQs Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
