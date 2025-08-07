import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const TrustedWorldWide = ({ TrustedWorldWideData }) => {
    const { head, NumberList, lgText, serviceText, serviceLink, image } = TrustedWorldWideData;
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
    const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
    const scaleCards = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 1]);

    // === Animation Variants ===

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
                duration: 0.6
            }
        }
    };

    const fadeContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            ref={sectionRef}
            className="container mx-auto overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeContainer}
        >
            <motion.div
                className="w-[90%] mx-auto bg-[#00000010] rounded-4xl p-5 lg:px-10 py-15 mb-[50px]"
                variants={fadeContainer}
            >
                {/* Heading */}
                <motion.h1
                    className="text-3xl lg:text-5xl font-[500] lg:mt-5"
                    variants={fadeInUp}
                >
                    {head}
                </motion.h1>

                {/* Number Cards */}
                <motion.div
                    className="flex flex-wrap justify-between md:justify-center lg:justify-center items-center gap-5  mt-10"
                    style={{ scale: scaleCards }}
                    variants={fadeContainer}
                >
                    {NumberList.map((item, index) => (
                        <motion.div
                            key={index}
                            className="min-h-[180px] w-full md:w-[45%] lg:w-[31%] bg-[#00000017] rounded-2xl flex flex-col justify-around items-center "
                            variants={fadeInUp}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                            <div className='h-full gap-2 flex flex-col justify-between items-start '>
                                <motion.h1
                                className="text-7xl font-[500] text-[var(--text-hover-color)]"
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                {item.num}
                            </motion.h1>
                            <motion.p
                                className="text-[var(--text-color)]"
                            >
                                {item.text}
                            </motion.p>
                            <NavLink to={item.textLink}>
                                <motion.div
                                    className="text-[#004DB5] border-b-2 border-[#004DB5] p-0.1 w-max"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 500 }}
                                >
                                    {item.linkText}
                                </motion.div>
                            </NavLink>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    className="min-h-[500px] my-10 flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0"
                    variants={fadeContainer}
                >
                    {/* Text Section */}
                    <motion.div
                        className="w-full lg:w-[45%]"
                        style={{ y: yContent }}
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className="text-2xl lg:text-3xl w-full lg:w-[90%] leading-10 lg:leading-11 mb-5 font-[500]"
                        >
                            {lgText}
                        </motion.h2>
                        <NavLink to={serviceLink}>
                            <motion.div
                                className="text-[#004DB5] border-b-2 border-[#004DB5] p-0.1 inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 500 }}
                            >
                                {serviceText}
                            </motion.div>
                        </NavLink>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="w-full lg:w-[50%] rounded-2xl overflow-hidden"
                        style={{ y: yImage }}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        <motion.img
                            src={image}
                            alt=""
                            className="w-full h-auto object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 250 }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default TrustedWorldWide;
