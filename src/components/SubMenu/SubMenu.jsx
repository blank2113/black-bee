import "./SubMenu.css";
import { getTypeId } from "../../store/slices/getId";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function SubMenu({ types }) {
  const typeId = useSelector((state) => state.getId.typeId);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      <div className="subMenu">
        <motion.ul
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="subMenu-inner"
        >
          {types.map((item) => (
            <li
              className={
                typeId === item.id
                  ? "subMenu-inner__item active"
                  : "subMenu-inner__item"
              }
              key={item.id}
              onClick={() => dispatch(getTypeId(item.id))}
            >
              {item.name}
            </li>
          ))}
        </motion.ul>
      </div>
    </AnimatePresence>
  );
}

export default SubMenu;
