'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About SlothSquad" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >

        SlothSquad is a community-driven project dedicated to supporting { ' '}
        <span className="font-extrabold text-white">
          Sloths  { ' '}
        </span>

        conservation efforts. Our team is made up of passionate individuals who are committed to making a positive impact on the world. We have created SlothCoin
        <span className="font-extrabold text-white">
          { ' '} (SLC)  { ' '}
        </span>
        , an ERC-20 token built on the Ethereum blockchain, to facilitate transactions within our ecosystem. A portion of the token supply is also allocated to the
        <span className="font-extrabold text-white">
          { ' '}   Sloths  { ' '}
        </span>
        Adoption Program, which allows supporters to directly contribute to
        <span className="font-extrabold text-white">
          { ' '}   Sloths { ' '}
        </span>
        conservation efforts.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
