import './RemoveCategoryPanel.css'
import { useDeleteCategoryMutation} from '../../store/middlewares/animalsApi'
import { useSelector, useDispatch} from 'react-redux'
import { getCategoryStatusDel} from '../../store/slices/getStatus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { motion} from 'framer-motion'
import { getCategoryId} from '../../store/slices/getId'


function RemoveCategoryPanel({category}) {
    const categoryId = useSelector( state => state.getId.categoryId)
    const dispatch = useDispatch()
    const CategoryStatusDel = useSelector(state=> state.getStatus.categoryStatusDel)
    const[delCategory]= useDeleteCategoryMutation()

    const handleDel = async (e) =>{
        e.preventDefault()
        if(categoryId){
            await delCategory(categoryId).then(res => console.log(res))
        }
        dispatch(getCategoryStatusDel(false))
    }
  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={CategoryStatusDel? {opacity:1,scale:1} : {opacity:0,scale:0}}
    exit={{opacity:0,scale:0}}
    className="RemoveCategoryPanel">
        <div className='RemoveCategoryPanel-wrapper'>
        <p>Удалить категорию</p>
        <FontAwesomeIcon
          className="close"
          icon={faXmark}
          onClick={()=>dispatch(getCategoryStatusDel(false))}
        />
        <form>
        <div className="wrap-select-arrow">
            <label htmlFor="category">Категория:</label>
            <select
              className="sform-control active"
              name="category"
              id="category"
                onChange={(e)=> dispatch(getCategoryId(e.target.value))}
            >
              {category.map((item) => (
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
            <div>
            <button className='create-btn' onClick={handleDel}>Удалить</button>
            <button className='reset-btn'onClick={()=> dispatch(getCategoryStatusDel(false))}>Оменить</button>
            </div>
            
        </div>
    </motion.div>
  )
}

export default RemoveCategoryPanel