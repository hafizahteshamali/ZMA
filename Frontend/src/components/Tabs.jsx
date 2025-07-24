import { useEffect, useState, useRef } from "react";
import { useScroll, useInView } from "framer-motion";

const ProcessTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(-1); // Initially no tab open
  const sectionRef = useRef(null);

  // Detect if tabs section is in viewport
  const isInView = useInView(sectionRef, { amount: 0.4 });

  useEffect(() => {
    let timer;
    if (isInView) {
      // Start auto animation
      let i = 0;
      setActiveTab(0);
      timer = setInterval(() => {
        i++;
        if (i < tabs.length) {
          setActiveTab(i);
        } else {
          clearInterval(timer);
        }
      }, 1000); // Har 1 second me next tab open
    } else {
      // Reset when user scrolls away
      setActiveTab(-1);
    }

    return () => clearInterval(timer);
  }, [isInView, tabs.length]);

  return (
    <div ref={sectionRef} className="w-full">
      <div className="w-full mx-auto px-4">
        {/* Progress indicators */}
        <div className="flex justify-between mb-8">
          {tabs.map((_, index) => (
            <div key={index} className="flex-1">
              <div
                className={`h-1 transition-colors duration-500 ${
                  index <= activeTab ? "bg-slate-800" : "bg-slate-400"
                } ${index < tabs.length - 1 ? "mr-4" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* Tabs Layout */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer w-full sm:w-[80%] lg:flex-1 p-4 rounded-md transition-transform duration-500 ${
                activeTab === index ? "scale-105 shadow-md" : "scale-100"
              }`}
            >
              {/* Tab number */}
              <div
                className={`text-xl font-bold mb-2 text-center lg:text-left ${
                  index <= activeTab ? "text-slate-800" : "text-slate-600"
                }`}
              >
                {tab.number}
              </div>

              {/* Tab heading */}
              <h3
                className={`text-[16px] font-semibold mb-4 text-center lg:text-left ${
                  index <= activeTab ? "text-slate-800" : "text-slate-600"
                }`}
              >
                {tab.title}
              </h3>

              {/* Tab description - show as we progress */}
              {activeTab >= index && (
                <div className="mt-4 p-4 rounded-lg shadow-sm text-center lg:text-left transition-all duration-500">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTabs;
