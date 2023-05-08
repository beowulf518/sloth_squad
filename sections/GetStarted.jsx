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
            SlothSquad (SLOTH) is a deflationary ERC-20 token with a total supply of 1 billion tokens. All transactions on the SlothCoin network incur a 10% fee, which is split between redistributing 5% to all holders of SLOTH and adding the remaining 5% to the liquidity pool. SLOTH also includes a burn mechanism that decreases the total supply with each transaction, ensuring that the token's value increases over time. Our liquidity pool is designed to provide sufficient liquidity for trading, with 100% of the tokens added to the pool coming from transaction fees. By holding and trading SLOTH, you can support sloth conservation efforts and make a positive impact on the world.
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
