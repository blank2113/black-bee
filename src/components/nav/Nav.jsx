import { useState } from "react";
import "./nav.css";
import NavItem from "./navItem/NavItem";


const menuData = [{"id":1,
"name": "Главня","href":"main"}, {"id":2,
"name": "Товары","href":"goods"}, {"id":3,
"name": "О нас","href":"about"}, {"id":4,
"name": "Контакты","href":"contact"}];

function Nav({ active, setActive }) {
  const [activeIndex, setActiveIndex] = useState(1);
  // console.log(menuData);
  return (
    <div
      className={active ? "nav active" : "nav"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="nav-content" onClick={(e) => e.stopPropagation()}>
        {menuData.map((item) => (
          <NavItem key={item.index}
          item={item}
          isSelected={activeIndex === item.id}
          handleClick={()=> setActiveIndex(item.id)}
          />
        ))}
              </div>
    </div>
  );
}

export default Nav;
