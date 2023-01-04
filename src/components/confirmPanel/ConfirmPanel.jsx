import React from "react";
import "./confirmPanel.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getActivePanelValue } from "../../store/slices/getActivePanel";

function ConfirmPanel({asd}) {
  const getId = useSelector((state) => state.getId.value);
  const dispatch = useDispatch();


  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(getActivePanelValue(false))

    axios({method:"delete",
    url:`http://164.92.147.133:8000/product?id=${Number(getId)}`}).then((res) =>  console.log(res))
    .catch((e) => console.log(e));
  };
  return (
    <div className="confirm-panel">
      <div className="confirm-panel-wrapper">
        <div className="confirm-panel-window">
          <button className="confirm-btn" onClick={handleDelete}>
            Удалить
          </button>
          <button
            className="rejected-btn"
            onClick={() => dispatch(getActivePanelValue(false))}
          >
            Оменить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPanel;
