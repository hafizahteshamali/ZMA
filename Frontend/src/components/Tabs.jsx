import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const ProcessTabs = ({ tabs }) => {
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(-1); // Start from -1 (none active)
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 }); // Only trigger once, 40% visible

  // Auto-open logic when section is in view
  useEffect(() => {
    if (!isInView) return;

    tabs.forEach((_, index) => {
      setTimeout(() => {
        setOpenTabs((prev) => [...prev, index]);
        setActiveTab(index); // Highlight active tab on progress bar
      }, index * 1500); // 1.5s delay between each tab
    });
  }, [isInView, tabs]);

  const handleTabClick = (index) => {
    setActiveTab(index); // Allow user to click and highlight
  };

  return (
    <div ref={sectionRef} className="w-full">
      <div className="w-full mx-auto px-4">

        {/* Progress indicators */}
        <div className="flex justify-between mb-8">
          {tabs.map((_, index) => (
            <div key={index} className="flex-1">
              <div
                className={`h-1 transition-all duration-500 ${
                  openTabs.includes(index)
                    ? "bg-slate-800"
                    : "bg-slate-300"
                } ${index < tabs.length - 1 ? "mr-4" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer w-full sm:w-[80%] lg:flex-1 p-4 rounded-md transition-all duration-500 ease-in-out`}
              onClick={() => handleTabClick(index)}
            >
              {/* Tab number */}
              <div
                className={`text-xl font-bold mb-2 text-center lg:text-left ${
                  activeTab === index ? "text-slate-800" : "text-slate-600"
                }`}
              >
                {tab.number}
              </div>

              {/* Tab heading */}
              <h3
                className={`text-[16px] font-semibold mb-4 text-center lg:text-left ${
                  activeTab === index ? "text-slate-800" : "text-slate-600"
                } hover:text-slate-800 transition-colors`}
              >
                {tab.title}
              </h3>

              {/* Description */}
              {openTabs.includes(index) && (
                <div className="mt-4 p-4 rounded-lg shadow-sm text-center lg:text-left opacity-100 transition-opacity duration-700 ease-in-out">
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
