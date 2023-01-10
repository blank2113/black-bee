import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan,faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { getActiveBtnValue } from "../../store/slices/getActiveBtn";
import "./additionalEditPanel.css";
import { useDispatch } from "react-redux";
import { getActivePanelValue } from "../../store/slices/getActivePanel";


function AdditionalEditPanel() {
  const dispatch = useDispatch();



  return (
    <div className="additional-edit-panel">
      <div className="additional-edit-panel__inner">
        {/* <FontAwesomeIcon className="adde-btn" icon={faEllipsis} 
          onClick={ () => dispatch(getActiveBtnValue(true))}
        /> */}
        <FontAwesomeIcon
          className="del-btn"
          icon={faTrashCan}
          onClick={() => dispatch(getActivePanelValue(true))}
        />
      </div>
    </div>
  );
}

export default AdditionalEditPanel;
