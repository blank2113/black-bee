import React from 'react'
import './AdminPage.css';
import {motion} from 'framer-motion'
import AdminHeader from '../components/adminHeader/AdminHeader'
import AsideMenu from '../components/asideMenu/AsideMenu';


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

function AdminPage() {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="admin-page">
      <motion.div initial="hidden" whileInView="visible" variants={blockAnimation} className='admin-page-inner'>
        <AdminHeader/>
        <motion.div className='admin-page-inner__wrapper'>
          <AsideMenu/>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AdminPage