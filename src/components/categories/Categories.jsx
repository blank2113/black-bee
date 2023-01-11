import React from "react";
import "./categories.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesItem } from "../../store/slices/getCategories";

function Categories({types}) {
  const getCategories = useSelector((state) => state.getCategories.value);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <div className="categories-inner">
        <ul className="categories-inner__nav">
          {types.map((item) => (
            <li
              key={item.id}
              className={
                getCategories === item.name
                  ? "categories-inner__nav-item active"
                  : "categories-inner__nav-item"
              }
              onClick={() =>
                dispatch(getCategoriesItem(item.name))
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
