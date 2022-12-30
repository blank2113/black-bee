import React, { useState } from 'react'
import './editPanel.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

function EditPanel() {
  const [as , setAs] = useState(false);
  return (
    <motion.div
    className='edit-panel'>
        <div className='edit-panel-inner'>
            <motion.a 
            initial={{scale:1, opacity:1}}
            whileHover={{scale:1.1,opacity:0.7}}
            whileTap={{scale:.7,opacity:1}}
            onClick={()=> setAs(!as)}
            className='add-btn'>
                <FontAwesomeIcon icon={faPlus}/>
                <p>Добавить</p> 
            </motion.a>
            <motion.a 
            initial={{scale:1, opacity:1}}
            whileHover={{scale:1.1,opacity:0.7}}
            whileTap={{scale:.7,opacity:1}}
            className='delete-btn'>
                <FontAwesomeIcon icon={faXmark}/>
                <p>Удалить</p> 
            </motion.a>
            {as === true ?  <div className='lik'><input type="text" placeholder='asd'/></div> : null}
        </div>
    </motion.div>
  )
}

export default EditPanel