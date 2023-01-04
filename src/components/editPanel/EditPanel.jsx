import React from 'react'
import './editPanel.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { getStatusValue} from '../../store/slices/getStatus' 

function EditPanel() {
  const dispatch = useDispatch();

  return (
    <motion.div
    className='edit-panel'>
        <div className='edit-panel-inner'>
            <motion.a 
            initial={{scale:1, opacity:1}}
            whileHover={{scale:1.1,opacity:0.7}}
            whileTap={{scale:.7,opacity:1}}
            onClick={()=> dispatch(getStatusValue(true))}
            className='add-btn'>
                <FontAwesomeIcon icon={faPlus}/>
                <p>Добавить</p> 
            </motion.a>
        </div>
    </motion.div>
  )
}

export default EditPanel