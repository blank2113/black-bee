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
        {/* <motion.ul className="nav-content__list list" onClick={()=>setActiveIndex()}>
          <li className="list__item">
            <a href="#home" className="list__link">
              Главная
            </a>
          </li>
          <li className="list__item">
            <a href="#goods" className="list__link">
              Товары
            </a>
          </li>

          <li className="list__item">
            <a href="#about" className="list__link">
              О нас
            </a>
          </li>

          <li className="list__item">
            <a href="#contacts" className="list__link">
              Контакты
            </a>
          </li>
        </motion.ul> */}
      </div>
    </div>
  );
}

export default Nav;
