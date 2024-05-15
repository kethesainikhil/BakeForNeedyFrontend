import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CardComponent } from './CardComponent';
const CardTransition = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ x: 0, opacity: 1 });
    }
    if (inView2) {
      controls2.start({ x: 0, opacity: 1 });
    }
  }, [controls1, controls2, inView1, inView2]);

  return (
    <div className=" w-full flex flex-col sm:flex sm:items-center sm:flex-row  justify-center sm:mt-2 ">
      <motion.div
        ref={ref1}
        initial={{ x: -100, opacity: 0 }}
        animate={controls1}
        transition={{ duration: 3 }} // Adjust the duration here (e.g., 1 second)
        className=" shadow-lg rounded-lg sm:pb-20  p-6 m-4 sm:mb-4 -mb-10"
      >
        <CardComponent />
      </motion.div>
    </div>
  );
};

export default CardTransition;
