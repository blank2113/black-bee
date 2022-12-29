import React from "react";
import { motion } from "framer-motion";
import ActiveLine from "../activeLine/ActiveLine";
import "./navItem.css";
import { Link } from "react-scroll";

function NavItem(props) {
  const { item, isSelected, handleClick = Function.prototype } = props;
  console.log(item);
  return (
    <motion.div
      onHoverStart={handleClick}
      // initial={{ color: "rgba(255,255,255)" }}
      // animate={{
      //   color: isSelected ? "rgba(255,255,255)" : "rgba(255,255,255)",
      // }}
      className="nav-content__list list"
      style={{ position: "relative" }}
    >
      {isSelected && <ActiveLine />}
      {
        <Link
          to={item.href}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {item.name}
        </Link>
      }
    </motion.div>
  );
}

export default NavItem;
