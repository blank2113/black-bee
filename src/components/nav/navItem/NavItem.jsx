import React from "react";
import { motion } from "framer-motion";
import ActiveLine from "../activeLine/ActiveLine";
import "./navItem.css"

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
      {<a href="#aa" className="nav-content__list-item list-item">{item}</a>}
    </motion.div>
  );
}

export default NavItem;
