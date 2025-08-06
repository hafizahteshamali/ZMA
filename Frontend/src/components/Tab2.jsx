"use client";

import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";

const Tabs2 = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default first tab active

  const tabContent = [
    {
      title: "Real-Time System Monitoring",
      description: "Continuously monitor your servers and applications with instant alerts to minimize disruptions and maintain peak performance..",
      hasReadMore: true,
    },
    {
      title: "Secure Data Management",
      description: "Keep your business data safe with advanced encryption, automated backups, and reliable recovery solutions tailored for compliance.",
      hasReadMore: true,
    },
    {
      title: "24/7 Technical Support",
      description: "Our expert team is available around the clock to troubleshoot, resolve issues, and ensure your IT infrastructure stays up and running.",
      hasReadMore: true,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-[50px] w-full lg:w-[80%]">
      <div className="w-full">
        {tabContent.map((tab, index) => (
          <div
            key={index}
            className={`
              p-6 cursor-pointer transition-all duration-300 my-3
              ${activeIndex === index ? 'opacity-100 border-l-4 border-[var(--text-hover-color)]' : 'opacity-50'}
            `}
            onClick={() => setActiveIndex(index)}
          >
            <h2 className="text-2xl font-bold text-[var(--text-hover-color)] mb-2">{tab.title}</h2>
            <p className="text-[var(--text-color)] mb-4">{tab.description}</p>
            {activeIndex === index && tab.hasReadMore && (
              <a href="#" className="flex items-center text-[var(--text-hover-color)] font-semibold hover:underline">
                Read More
                <FaChevronRight className="ml-1 h-4 w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs2