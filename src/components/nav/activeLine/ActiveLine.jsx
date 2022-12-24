import { motion } from "framer-motion";

function ActiveLine() {
  return (
    <motion.div
      layoutId="activeItem"
      style={{
        width: "100%",
        height: "4px",
        position: "absolute",
        bottom: "-6px",
        backgroundColor: "rgba(255,255,255)",
      }}
    />
  );
}

export default ActiveLine;
