import './editPanel.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus, faLayerGroup, faTrash, faPaw } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useSelector,useDispatch } from 'react-redux'
import { getStatusValue,getBrandStatus, getBrandDelStatus, getCategoryStatus} from '../../store/slices/getStatus' 



function EditPanel() {
  const dispatch = useDispatch();

  return (
    <motion.div
    className='edit-panel'>
        <div className='edit-panel-inner'>
            <motion.button
            initial={{scale:1, opacity:1}}
            whileHover={{scale:1.1,opacity:0.7}}
            whileTap={{scale:.7,opacity:1}}
            onClick={()=> dispatch(getStatusValue(true))}
            className='add-btn'>
                <FontAwesomeIcon icon={faPlus}/>
                <p>Добавить</p> 
            </motion.button>
            <button className='add-brand' onClick={()=> dispatch(getBrandStatus(true))}>
              <FontAwesomeIcon className='add-brand-i' icon={faLayerGroup}/>
              <p>Бренд</p> 
            </button>
            <button className='del-brand' onClick={()=> dispatch(getBrandDelStatus(true))}>
              <FontAwesomeIcon className='del-brand-i' icon={faTrash}/>
              <p>Бренд</p> 
            </button>
            <button className='add-category' onClick={()=> dispatch(getCategoryStatus(true))}>
              <FontAwesomeIcon className='add-category-i' icon={faPaw}/>
              <p> Бренд</p> 
            </button>
        </div>
    </motion.div>
  )
}

export default EditPanel