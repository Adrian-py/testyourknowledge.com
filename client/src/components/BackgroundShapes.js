import React from "react";

import { motion } from "framer-motion";

const itemVariants = {
  initial: {},
  after: {},
};

const firstItemVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  after: {
    x: ["0vw", "80vw", "100vw", "40vw", "0vw"],
    y: ["0vh", "-20vh", "8vh", "-5vh", "0vh"],
    transition: {
      duration: 100,
      repeat: Infinity,
    },
  },
};

const secondItemVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  after: {
    x: ["0vw", "-60vw", "-80vw", "-50vw", "0vw"],
    y: ["0vh", "-12vh", "10vh", "6vh", "0vh"],
    transition: {
      duration: 100,
      repeat: Infinity,
    },
  },
};

export default function BackgroundShapes() {
  return (
    <motion.div
      className="moving-shapes"
      variants={itemVariants}
      animate={"after"}
    >
      <motion.div
        className="moving-shapes__item moving-shapes__item--one"
        variants={firstItemVariants}
      ></motion.div>
      <motion.div
        className="moving-shapes__item moving-shapes__item--two"
        variants={secondItemVariants}
      ></motion.div>
    </motion.div>
  );
}
