import React from 'react'
import './adminHeader.css'
import logo2 from '../../assets/logo2.svg'
import { useNavigate } from "react-router-dom";


function AdminHeader() {
  const date = new Date();
  const day = date.toLocaleString("ru-RU",{day:"2-digit"});
  const month = date.toLocaleString("ru-RU",{month:"long"});
  const year = date.getFullYear();  
  const navigate = useNavigate();
  const goMain = ()=>{
    navigate("/")
  }

  return (
    <div className='admin-header'>
        <div className='admin-header-inner '>
            <div className='admin-header-inner__logo' onClick={()=> goMain()}>
                <img src={logo2} alt="admin-logo" />
                <p>black bee | zoomarket</p>
            </div>
            <div className='admin-header-inner__date'>
                <span>{day}</span>
                <span className='month'>{month}</span>
                <span>{year}</span>
            </div>
        </div>
    </div>
  )
}

export default AdminHeader