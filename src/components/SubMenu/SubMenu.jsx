import { getTypeId } from "../../store/slices/getId";
import "./SubMenu.css";
import { useSelector,useDispatch } from "react-redux";

function SubMenu({ types }) {
    const typeId = useSelector(state => state.getId.typeId)
  const dispatch = useDispatch();
  return (
    <div className="subMenu">
      <ul className="subMenu-inner">
        {types.map((item) => (
          <li className={typeId === item.id ? 'subMenu-inner__item active' : 'subMenu-inner__item'} 
          key={item.id} onClick={() => dispatch(getTypeId(item.id))}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubMenu;
