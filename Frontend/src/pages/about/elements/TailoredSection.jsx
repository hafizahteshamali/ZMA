import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NormalButton from '../../../components/NormalButton';

const TailoredSection = ({ TailoredSectionData }) => {
    const { img, heading, description, btnText } = TailoredSectionData;
    const sectionRef = useRef(null);
    
    // Scroll progress animation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    // Parallax effects
    const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 0.77, 0.47, 0.97]
            }
        }
    };

    return (
        <motion.div 
            ref={sectionRef}
            className='min-h-screen container mx-auto my-[50px] w-[85%]'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="lg:h-[600px] w-full flex justify-center items-center">
                <div className='lg:h-[500px] w-full flex flex-col lg:flex-row justify-center items-center gap-15'>
                    {/* Image with scroll animation */}
                    <motion.div 
                        className="w-full lg:w-[45%] h-[100%] rounded-2xl overflow-hidden"
                        style={{ y: yImg }}
                    >
                        <motion.img 
                            src={img} 
                            alt="" 
                            className='h-[100%] w-[100%] object-cover'
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.03 }}
                        />
                    </motion.div>

                    {/* Content with scroll animation */}
                    <motion.div 
                        className="w-full lg:w-[45%] rounded-2xl flex flex-col gap-5"
                        style={{ y: yText }}
                        variants={containerVariants}
                    >
                        <motion.h1 
                            className='text-4xl text-[var(--text-hover-color)] font-[500]'
                            variants={itemVariants}
                        >
                            {heading}
                        </motion.h1>
                        
                        <motion.p 
                            className='font-[400] text-[var(--text-color)] lg:leading-7'
                            variants={itemVariants}
                        >
                            {description}
                        </motion.p>
                        
                        <motion.div variants={itemVariants}>
                            <NormalButton 
                                text={btnText} 
                                className="h-[45px] w-[70%] lg:w-[40%] rounded-full bg-[var(--text-hover-color)] text-[var(--white-color)]"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default TailoredSection;