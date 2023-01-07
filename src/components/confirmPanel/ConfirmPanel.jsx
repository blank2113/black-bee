import "./confirmPanel.css";
import { useSelector, useDispatch } from "react-redux";
import { getActivePanelValue } from "../../store/slices/getActivePanel";
import { useDeleteProductMutation} from '../../store/middlewares/productsApi'
import {motion} from 'framer-motion'

function ConfirmPanel({active}) {
  const getId = useSelector((state) => state.getId.value);
  const dispatch = useDispatch();
  const [delProd] = useDeleteProductMutation()

  const handleDelete = async(e) => {
    e.preventDefault(); 
    if(getId){
      await delProd(getId)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    }
    dispatch(getActivePanelValue(false));
  };

  return (
    <motion.div className="confirm-panel"
    initial={{scale:0,opacity:0}}
    animate={ active ? {scale:1,opacity:1} : {scale:0,opacity:0}}
    exit={{opacity:0,scale:0}}
    >
      <motion.div className="confirm-panel-wrapper"
      initial={{opacity:0,scale:0}}
      animate={active? {opacity:1,scale:1} : {opacity:0,scale:0}}
      exit={{opacity:0,scale:0}}
      >
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
      </motion.div>
    </motion.div>
  );
}

export default ConfirmPanel;
