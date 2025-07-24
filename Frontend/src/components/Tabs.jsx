import { useState } from "react";

const ProcessTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // First tab open by default

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="w-full mx-auto px-4">

        {/* Progress indicators */}
        <div className="flex justify-between mb-8">
          {tabs.map((_, index) => (
            <div key={index} className="flex-1">
              <div
                className={`h-1 ${
                  index === activeTab ? "bg-slate-800" : "bg-slate-400"
                } ${index < tabs.length - 1 ? "mr-4" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* Tabs layout */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer w-full sm:w-[80%] lg:flex-1 p-4 rounded-md`}
              onClick={() => handleTabClick(index)}
            >
              {/* Tab number */}
              <div
                className={`text-xl font-bold mb-2 text-center lg:text-left ${
                  index === activeTab ? "text-slate-800" : "text-slate-600"
                }`}
              >
                {tab.number}
              </div>

              {/* Tab heading */}
              <h3
                className={`text-[16px] font-semibold mb-4 text-center lg:text-left ${
                  index === activeTab ? "text-slate-800" : "text-slate-600"
                } hover:text-slate-800 transition-colors`}
              >
                {tab.title}
              </h3>

              {/* Tab description */}
              {activeTab === index && (
                <div className="mt-4 p-4 rounded-lg shadow-sm text-center lg:text-left">
                  <p className="text-slate-600 text-sm leading-relaxed break-words whitespace-normal">
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
