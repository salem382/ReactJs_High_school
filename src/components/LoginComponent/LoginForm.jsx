import "./LoginForm.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BtnReload from '../../components/general/btnReload/BtnReload';
import { useState } from "react";
import {getUser} from '../../store/currentUser';
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const { t } = useTranslation();


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPost, setIsPost] = useState (false);
  const [msg, setMsg] = useState('');
  const [userData, setUserData] = useState({
      email:"",
      password:""
  });


  const postData = (e) => {
      let usr = {...userData};
      usr[e.target.name] = e.target.value;
      setUserData({...usr})
  }

  const getData = async() => {
      setIsPost(true);
      try {

          const {data} = await axios.post(`https://newbrainshigh.com/api/auth/userLogin`,null,{

              params: { email: userData.email, password: userData.password }
          }
          );


          localStorage.setItem("heighNewbrainsToken", data.access_token);
          navigate("/subjects");
          dispatch(getUser());
          setIsPost(false);
      }
      catch (error) {
          setIsPost(false);
          error.response.data.message && setMsg(error.response.data.message);
      }
      
  }

  const submitData = async (e) => {
      e.preventDefault();
      userData.name === "" || userData.password === "" ? setMsg("Enter user and Email Data") :  getData();
  }




  return (
    <form className="loginForm" onSubmit={(e) => submitData(e)}>
      <input onChange={(e) => postData(e)} name="email"
        type="email"
        className="inputBtn"
        placeholder={t("log-in-form-Email")}
      />
      <input onChange={(e) => postData(e)} name="password"
        type="password"
        className="inputBtn"
        placeholder={t("log-in-form-password")}
      />
      <button type="submit" className="formBtn">
        {isPost ? <BtnReload />:
         <span>{t("log-in-form-button")}</span>
         }
      </button>
      <p className='text-danger' style={{fontSize:"18px"}}>{msg}</p>
    </form>
  );
};

export default LoginForm;
