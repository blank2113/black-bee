import "./AddCategoryPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryStatus } from "../../store/slices/getStatus";
import { motion } from "framer-motion";
import { useAddNewCategoryMutation } from "../../store/middlewares/animalsApi";
import { getCategoryName } from "../../store/slices/getId";

function AddCategoryPanel() {
  const dispatch = useDispatch();
  const categoryStatus = useSelector((state) => state.getStatus.categoryStatus);
  const [addNewCategory] = useAddNewCategoryMutation();
  const categoryName = useSelector((state) => state.getId.categoryName);
  let formData = new FormData();

  const handleSend = async (e) => {
    e.preventDefault();
    formData.append("name", categoryName);
    if (formData) {
      await addNewCategory(formData).then((res) => res)
    }
    dispatch(getCategoryStatus(false))
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={
        categoryStatus ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
      }
      exit={{ opacity: 0, scale: 0 }}
      className="AddCategoryPanel"
    >
      <div className="AddCategoryPanel-inner">
        <p>Добавить новую категорию</p>
        <FontAwesomeIcon
          onClick={() => dispatch(getCategoryStatus(false))}
          className="close"
          icon={faXmark}
        />
        <form>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => dispatch(getCategoryName(e.target.value))}
          />
        </form>
        <div className="btns-cat">
          <button className="create-btn" onClick={handleSend}>
            Добавить
          </button>
          <button
            className="reset-btn"
            onClick={() => dispatch(getCategoryStatus(false))}
          >
            Оменить
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default AddCategoryPanel;
