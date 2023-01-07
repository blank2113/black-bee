import './AddBrandPanel.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux'
import { getBrandStatus} from '../../store/slices/getStatus'
import { motion} from 'framer-motion'
import { useAddBrandsMutation} from '../../store/middlewares/brandApi'
import { setBrandName} from '../../store/slices/getId'

function AddBrandPanel() {
    const brandStatus = useSelector(state => state.getStatus.brandStatus);
    const brandName = useSelector(state=> state.getId.brandName)
    const [addNewBrand] = useAddBrandsMutation();
    const dispatch= useDispatch();
    let formData = new FormData();

    const handleSend = async(e)=>{
        formData.append('name',brandName)
        if(brandName){
            await addNewBrand(formData)
        }
        dispatch(getBrandStatus(false))
    }
  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={brandStatus ? {opacity:1, scale:1}: {opacity:0,scale:0}}
    exit={{opacity:0,scale:0}}
    className='addBrandPanel'>
        <div className='addBrandPanel-wrapper'>
            <p>Добавить новый бренд</p>
            <FontAwesomeIcon icon={faXmark} className="close-btn"
            onClick={()=> dispatch(getBrandStatus(false))}
            />
            <form className='form'>
                <label htmlFor="brand-name">Имя бренда</label>
                <input type="text" name='brand-name' onChange={e => dispatch(setBrandName(e.target.value))}/>
            </form>
            <div className='addBrandPanel-wrapper-btn'>
            <button className='create-btn' onClick={handleSend}>Добавить</button>
            <button className='reset-btn' onClick={()=> dispatch(getBrandStatus(false))}>Отменить</button>
            </div>
        </div>
    </motion.div>
  )
}

export default AddBrandPanel