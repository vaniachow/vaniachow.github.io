import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[200px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFE4B5]" /> 
          <div className="w-1 sm:h-80 h-40 yellow-gradient" /> 
        </div>

        <div className="w-[700px]"> 
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className="text-[#FFBC9B]">Vania</span></h1> {/* Light and warm tone color */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span role="img" aria-label="Location Emoji">📍</span> Computer Science @ Stanford University
          </p>
            <p className={'mt-3 text-white text-[17px] max-w-3xl leading-[30px]'}>
              Passionate about user-centric solutions and thinking outside the box, I constantly strive to expand my skills and knowledge.
              Beyond CS, I enjoy creative writing and exploring the world. Let's create something incredible together!
            </p>
            <p className={'mt-3 text-white text-[17px] max-w-3xl leading-[30px]'}>
              &#x1F4E7; <span style={{ fontFamily: 'Arial, sans-serif', fontStyle: 'italic' }}>vaniac@stanford.edu</span>
            </p>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64-px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
