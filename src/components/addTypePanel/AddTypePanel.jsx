import './AddTypePanel.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {getTypeStatus} from '../../store/slices/getStatus'
import {getTypeName} from '../../store/slices/getId'
import {useAddTypeMutation} from '../../store/middlewares/typeApi'
import {useDispatch, useSelector} from 'react-redux'
import { motion } from 'framer-motion'


function AddTypePanel() {
    const typeStatus = useSelector(state=>state.getStatus.typeStatus)
    const typeName = useSelector(state => state.getId.typeName)
    const [addType] = useAddTypeMutation()
    const dispatch = useDispatch()
    const formData = new FormData()

    const handleAdd = async(e)=>{
        e.preventDefault();
        formData.append('name',typeName)
        if(typeName){
            await addType(formData)
        }
       dispatch(getTypeStatus(false))
    }
  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={typeStatus? {opacity:1,scale:1}:{opacity:0,scale:0}}
    exit={{opacity:0,scale:0}}
    className='AddTypePanel'>
        <div className='AddTypePanel-wrapper'>
            <p>Добавить тип</p>
            <FontAwesomeIcon icon={faXmark} 
            onClick={()=>dispatch(getTypeStatus(false))}
            className='close'/>
            <form>
                <label htmlFor="type-input">Наименование:</label>
                <input type="text" name='type-input' onChange={(e)=> dispatch(getTypeName(e.target.value))}/>
            </form>
            <div className='addType-btn'>
                <button className='create-btn' onClick={handleAdd}>Добавить</button>
                <button className='reset-btn' onClick={()=>dispatch(getTypeStatus(false))}>Отменить</button>
            </div>
        </div>
    </motion.div>
  )
}

export default AddTypePanel