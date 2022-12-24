import React from "react";
import { motion } from "framer-motion";
import ActiveLine from "../activeLine/ActiveLine";

function NavItem(props) {
  const { item, isSelected, handleClick = Function.prototype } = props;

  return (
    <motion.div
      onClick={handleClick}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "rgba(255,255,255)" : "#000" }}
      className="nav-content__list list"
      style={{ position: "relative" }}
    >
      {isSelected && <ActiveLine />}
      {<a href="#aa">{item}</a>}
    </motion.div>
  );
}

export default NavItem;
