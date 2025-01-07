import { motion } from "framer-motion";

const ScrollAnimation = ({ children, initial, animate, transition }) => {
  return (
    <motion.div
      initial={initial || { opacity: 0, y: 50 }}
      whileInView={animate || { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition || { duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;