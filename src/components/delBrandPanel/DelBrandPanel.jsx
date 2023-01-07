import './DelBrandPanel.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'
import { getBrandDelStatus} from '../../store/slices/getStatus'
import {getBrandId} from '../../store/slices/getId'
import {useSelector, useDispatch} from 'react-redux'
import { useDelBrandsMutation } from '../../store/middlewares/brandApi'



function DelBrandPanel({brand}) {
    const brandDelStatus = useSelector(state => state.getStatus.brandDelStatus);
    const brandId = useSelector(state=> state.getId.brandId)
    const dispatch = useDispatch()
    const [delBrand] = useDelBrandsMutation()

    const handleDel = async(e)=>{
        e.preventDefault();
        if(brandId){
            await delBrand(brandId).then(res => console.log(res)).catch(e=> console.log(e))
            dispatch(getBrandDelStatus(false))
        }
    }
  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={brandDelStatus ? {opacity:1,scale:1}: {opacity:0,scale:0}}
    exit={{opacity:0,scale:0}}
    className='DelBrandPanel'>
        <div className='addProdWindow-inner'>
            <p>Удаление Бренда</p>
            <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={()=> dispatch(getBrandDelStatus(false))}/>
            <form>
            <div className="wrap-select-arrow">
            <label htmlFor="brand">Бренд:</label>
            <select
              className="brand"
              name="brand"
              id="brand"
              onChange={e => dispatch(getBrandId(e.target.value))}
              >
              {brand.map((item) => (
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
            <div className='btns'>
            <motion.button 
            initial={{scale:1}}
            whileHover={{scale:1.03}}
            whileTap={{scale:1}}
            className="create-btn"
            onClick={handleDel}
            >
              Удалить
            </motion.button>
            <motion.button
              initial={{scale:1}}
              whileHover={{scale:1.03}}
              whileTap={{scale:1}}
              className="reset-btn"
              onClick={()=> dispatch(getBrandDelStatus(false))}>
              Отменить
            </motion.button>
            </div>
        </div>
    </motion.div>
  )
}

export default DelBrandPanel