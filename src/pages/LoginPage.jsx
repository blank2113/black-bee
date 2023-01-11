import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.svg";
import "./LoginPage.css";
import { useSelector, useDispatch } from "react-redux";
import { getInput } from "../store/slices/getInputValue";
import { useGetTokenAccessMutation } from "../store/middlewares/passwordApi";
import { motion } from "framer-motion";
import { logoAnimated, textAnimated } from "../animation/animation.js";


function LoginPage() {
  const getInputValue = useSelector((state) => state.getInputValue.password);
  const getInputUserName = useSelector((state) => state.getInputValue.username);
  const auth = useSelector(state => state.auth.value)
  const [addNewToken] = useGetTokenAccessMutation();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const formData = new FormData();
  formData.append("username", getInputUserName);
  formData.append("password", getInputValue);

  const handleAccess = async () => {
    if (formData) {
      await addNewToken(formData)
        .then((res) => sessionStorage.setItem("token", res.data.access_token))
        .catch((err) => console.log(err));
      }
      if(auth === getInputValue){
        goAdmin();
      }
  };

  const goAdmin = () => {
    navigate("/admin");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="login-page"
    >
      <div className="login-page__inner container">
        <div className="login-inner__logo">
          <motion.img
            custom={1.5}
            initial="hidden"
            whileInView="visible"
            variants={logoAnimated}
            src={logo2}
            alt="logo2"
          />
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={textAnimated}
            className="login-inner__logo-title"
          >
            black bee|zoomarket
          </motion.p>
        </div>
        <motion.div
          custom={1.7}
          initial="hidden"
          whileInView="visible"
          variants={logoAnimated}
          className="login-page__inner-wrapper"
        >
          <h3>Авторизация</h3>
          <form>
            <motion.input
              initial={{ opacity: 0.5 }}
              whileFocus={{ opacity: 1 }}
              type="password"
              name="password"
              placeholder="Введите пароль"
              onChange={(e) => dispatch(getInput(e.target.value))}
              autoComplete="on"
            />
          </form>
          <motion.button
            initial={{ scale: 1, opacity: 0.5 }}
            whileTap={{ scale: 1.5, opacity: 1 }}
            whileHover={{ opacity: 1 }}
            onClick={handleAccess}
          >
            Войти
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LoginPage;
