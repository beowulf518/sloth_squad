'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/econs.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="|Token" />
        <TitleText title={(
          <>Tokenomics
          </>
)}
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <p className=" text-white">
            The SlothSquad token, SlothCoin (SLC), is an ERC-20 token built on the Ethereum blockchain. It has a maximum supply of 1 billion tokens,
            SlothCoin will be used to facilitate transactions within the SlothSquad ecosystem, such as purchasing merchandise and participating in charity auctions. Additionally, a portion of the token supply will be allocated to the Sloth Adoption Program, providing supporters with a way to directly contribute to sloth conservation efforts
          </p>
          {
            /*
          startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          )) */}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
