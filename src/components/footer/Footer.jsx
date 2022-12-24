import React from "react";
import logof from "../../assets/logof.svg";
import {useNavigate} from 'react-router-dom'
import "./footer.css";


function Footer() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  }
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p className="footer-inner__text">© 2022 ORCUS. Все права защищены</p>
        <div className="footer-inner__image">
          <div onClick={()=> goLogin()}>
            <img src={logof} alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
