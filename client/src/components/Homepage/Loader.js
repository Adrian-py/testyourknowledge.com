import React from "react";
import { motion } from "framer-motion";

const loaderVariant = {
  initial: {
    width: "0",
  },
  after: {
    width: "90%",
  },
};

export default function Loader() {
  return (
    <div className="loader-container">
      <p className="loader__text">Loading...</p>
      <div className="loader">
        <motion.div
          className="loader__bar"
          variants={loaderVariant}
          initial="initial"
          animate="after"
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
