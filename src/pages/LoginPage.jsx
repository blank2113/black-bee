import React  from 'react'
import { useNavigate } from "react-router-dom";
import logo2 from '../assets/logo2.svg';
import "./LoginPage.css";
import {useSelector, useDispatch} from 'react-redux';
import { useGetPasswordQuery } from '../store/passwordApi';
import {getInput} from '../store/getInputValue'



function LoginPage() {
  const {data =[]} = useGetPasswordQuery();
  const getInputValue = useSelector(state => state.getInputValue.value)
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const goAdmin = () => {
    navigate("/admin");
  };
  return (
    <div className="login-page">
      <div className="login-page__inner container">
        <div className="login-inner__logo">
          <img src={logo2} alt="logo2"/>
          <p className="login-inner__logo-title">black bee|zoomarket</p>
        </div>
        <div className="login-page__inner-wrapper">
          <h3>Авторизация</h3>

          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            onChange={(e) => dispatch(getInput(e.target.value))}
          />
          <button onClick={() => (Number(getInputValue)  === Number(data[0].password)  ? goAdmin() : null)}>
            Войти
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage