import './DelTypePanel.css'
import {getTypeStatusDel} from '../../store/slices/getStatus'
import {useDispatch,useSelector} from 'react-redux'
import {getTypeId} from '../../store/slices/getId'
import {motion} from 'framer-motion'
import {useDelTypeMutation} from '../../store/middlewares/typeApi'

function DelTypePanel({types}) {
    const typeStatusDel = useSelector(state => state.getStatus.typeStatusDel)
    const typeId = useSelector(state=>state.getId.typeId)
    const [delType] = useDelTypeMutation()
    const dispatch = useDispatch()
    
    const handleDel = async (e) =>{
        e.preventDefault();
        if(typeId){
            await delType(typeId)
        }
        dispatch(getTypeStatusDel(false))
    }
  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={typeStatusDel ? {opacity:1,scale:1}:{opacity:0,scale:0}}
    exit={{opacity:0,scale:0}}
    className='DelTypePanel'>
        <div className='DelTypePanel-wrapper'>
            <p>Удалить тип</p>
            <form>
            <div className="wrap-select-arrow">
            <label htmlFor="type">Категория:</label>
            <select
              className="sform-control active"
              name="type"
              id="type"
            onChange={(e) => dispatch(getTypeId(e.target.value))}
            >
              {types.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="select-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
            </form>
            <div className='delType-btns'>
                <button className='create-btn' onClick={handleDel}>Удалить</button>
                <button className='reset-btn' onClick={()=> dispatch(getTypeStatusDel(false))}>Отменить</button>
            </div>
        </div>
    </motion.div>
  )
}

export default DelTypePanel