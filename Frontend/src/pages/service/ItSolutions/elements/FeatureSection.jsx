import React from 'react';
import Tabs2 from '../../../../components/Tab2';
import { motion } from 'framer-motion';

const FeatureSection = ({ FeaturesData }) => {
  const { title, heading, para } = FeaturesData;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-5">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="h-[40px] w-[150px] bg-[var(--text-hover-color)] text-[var(--white-color)] flex justify-center items-center rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: false }}
            >
              {title}
            </motion.div>

            <motion.h1
              className="my-5 text-4xl text-[var(--text-hover-color)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: false }}
            >
              {heading}
            </motion.h1>

            <motion.p
              className="text-[14px] lg:w-[70%] text-[var(--text-hover-color)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: false }}
            >
              {para}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <Tabs2 />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="max-h-[850px] w-full lg:w-[50%] rounded-lg my-5 lg:my-0 lg:rounded-4xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <img
              src="/assets/images/it-solutions/feature-img.jpg"
              className="h-[100%] w-[100%] object-contain"
              alt="Feature"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;
