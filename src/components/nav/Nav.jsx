import { useState } from "react";
import "./nav.css";
import NavItem from "./navItem/NavItem";

const menuData = ["Главная", "Товары", "О нас", "Контакты"];

function Nav({ active, setActive }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={active ? "nav active" : "nav"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="nav-content" onClick={(e) => e.stopPropagation()}>
        {menuData.map((item, index) => (
          <NavItem key={item}
          item={item}
          isSelected={activeIndex === index}
          handleClick={()=> setActiveIndex(index)}
          />
        ))}
              </div>
    </div>
  );
}

export default Nav;
