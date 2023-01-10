import "./menu.css";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getName } from "../../store/slices/getType";

function Menu({ animals }) {
  const getType = useSelector((state) => state.getType.value);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="menu"
      >
        {animals.map((item) => (
          <li
            key={item.id}
            className={getType === item.id ? "menu-item active" : "menu-item"}
            onClick={() => dispatch(getName(item.id))}
          >
            {item.name}
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}

export default Menu;
