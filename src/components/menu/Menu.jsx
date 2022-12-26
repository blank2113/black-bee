import React from "react";
import "./menu.css";
import { useGetAnimalsQuery } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { getName } from "../../store/getType";

function Menu() {
  const getType = useSelector((state) => state.getType.value);
  const dispatch = useDispatch();
  const { data = [], isLoading,isFetching } = useGetAnimalsQuery({},{pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false, });
  console.log(getType);
  console.log(data);
  if (isLoading) return <h3>Loading...</h3>;
  return (
    <ul className="menu">
      {data.map((item) => (
        <li
          key={item.id}
          className={getType === item.name ? "menu-item active" : "menu-item"}
          onClick={() => dispatch(getName(item.name))}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
