import React from 'react'
import './AdminPage.css';
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'
import AdminHeader from '../components/adminHeader/AdminHeader'
import AsideMenu from '../components/asideMenu/AsideMenu';
import EditPanel from '../components/editPanel/EditPanel';
import Table from '../components/Table/Table';
import Categories from '../components/categories/Categories';
import AddProdWindow from '../components/addProdWindow/AddProdWindow';
import ConfirmPanel from '../components/confirmPanel/ConfirmPanel';
import ChangeStatus from '../components/changeStatus/ChangeStatus';



const blockAnimation ={
  hidden:{
    y:-200,
    opacity:0
  },
  visible: custom =>({
    y:0,
    opacity:1,
    transition: {delay: custom * 0.2}
  })
}
export const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5
    }
  },
  hide: {
    y: -200,
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3
    }
  }
};
function AdminPage() {
  const getStatus = useSelector(state => state.getStatus.value)
  const getAsideItem = useSelector(state => state.getAsideItem.value)
  const getActivePanel = useSelector(state => state.getActivePanel.value)
  const getActiveBtn = useSelector(state => state.getActiveBtn.value)
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="admin-page">
      <motion.div initial="hidden" whileInView="visible" variants={blockAnimation} className='admin-page-inner'>
        <AdminHeader/>
        <motion.div className='admin-page-inner__wrapper'>         
          <div className='right'>
          <AsideMenu/>
          <motion.div 
          initial="hide"
          animate={getAsideItem === "Список товаров" ? "show" : "hide"}
          variants={variants}
          ><Categories/></motion.div>
          </div>
          <Table/>
        </motion.div>
        <EditPanel/>
        {getActivePanel && <ConfirmPanel/>}
        {getStatus && <AddProdWindow/>}
        {getActiveBtn && <ChangeStatus/>}
      </motion.div>
    </motion.div>
  )
}

export default AdminPage