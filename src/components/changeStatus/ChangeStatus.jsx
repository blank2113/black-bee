import React from "react";
import "./changeStatus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getActiveBtnValue } from "../../store/slices/getActiveBtn";

function ChangeStatus() {
  const getActiveBtn = useSelector((state) => state.getActiveBtn.value);
  const dispatch = useDispatch();
  return (
    <div className="chnage-status">
      <div className="selection">
        <p>Категория</p>
        <FontAwesomeIcon
          className="exit-btn-f"
          icon={faXmark}
          onClick={() => dispatch(getActiveBtnValue(false))}
        />
        <form>
          <div className="wrap-select-arrow">
            <label htmlFor="group">Категория:</label>
            <select name="group">
              <option name="in_popular" value={true}>
                Лучшие товары
              </option>
              <option name="in_sales" value={true}>
                Товары со скидкой
              </option>
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
          <div>
          <label htmlFor="asd">В наличии</label>
            <input type="radio" name="asd" value={true} />
            <label htmlFor="asd">Нет в наличии</label>
            <input type="radio" name="asd" value={true} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangeStatus;
