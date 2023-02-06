import "./SignupForm.scss";
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import BtnReload from "../general/btnReload/BtnReload";




const SignUpForm = () => {
  const { t } = useTranslation();


  
  const navigate = useNavigate();
  const [isPost, setIsPost] = useState (false);
  const [errArr, setErrArr] = useState({});
  const [msg, setMsg] = useState('');
  const [userData, setUserData] = useState({
      name:"",
      email:"",
      password:"",
      phone:"",
      gender:"",
      age:"",
      parent_phone:"",
      parent_email:"",
      city: "",
      state:"",
      section:"",
      grade:""
  });


  const postData = (e) => {
      let usr = {...userData};
      usr[e.target.name] = e.target.value;
      setUserData({...usr})
  }

  const getData = async() => {
      setIsPost(true);
      try {
          const {data} = await axios.post('https://newbrainshigh.com/api/auth/userRegister',userData)
          navigate('/login');
      }
      catch (error) {
          setIsPost(false);
          error.response.data.message ?  setMsg("This Email is Already Registed use Another One"):
          setErrArr({...JSON.parse(error.response.data)});
      }
  }

  const submitData = async (e) => {
      e.preventDefault();
      getData();
  }




  return (
    <form onSubmit={(e)=> submitData(e)}  className="signupForm">
      
      <input  onChange={(e) => postData(e)}
        name = "name"
        type="text"
        className="inputBtn"
        placeholder={t("sign-up-form-first-name")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.name && errArr.name[0]}</div>
      <input onChange={(e) => postData(e)}
        name="email"
        type="email"
        className="inputBtn"
        placeholder={t("sign-up-form-Email")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.email && errArr.email[0]}</div>
      <input
        onChange={(e) => postData(e)}
        name="password"
        type="password"
        className="inputBtn"
        placeholder={t("sign-up-form-password")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.password && errArr.password[0]}</div>
      <input 
        onChange={(e) => postData(e)}
        name="age"
        type="number"
        className="inputBtn"
        placeholder={t("sign-up-form-age")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.age && errArr.age[0]}</div>
      <select  onChange={(e) => postData(e)}
        className="inputBtn" name="gender" id="gender" required>
        <option value="" disabled selected hidden>
          {t("sign-up-form-gender")}
        </option>
        <option value="male">{t("sign-up-form-gender-male")}</option>
        <option value="female">{t("sign-up-form-gender-female")}</option>
      </select>
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.gender && errArr.gender[0]}</div>
      <input  onChange={(e) => postData(e)}
              name="phone"
        type="text"
        className="inputBtn"
        placeholder={t("sign-up-form-phone")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.phone && errArr.phone[0]}</div>
      <input  onChange={(e) => postData(e)}
              name="state"
        type="text"
        className="inputBtn"
        placeholder={t("sign-up-form-state")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.state && errArr.state[0]}</div>
      <input onChange={(e) => postData(e)}
            name="parent_phone"
        type="number"
        className="inputBtn"
        placeholder={t("sign-up-form-parent-phone")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.parent_phone && errArr.parent_phone[0]}</div>
       <input 
       onChange={(e) => postData(e)}
          name="parent_email"
          type="email"
          className="inputBtn"
          placeholder={t("sign-up-form-last-name")}
        />
        <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.parent_email && errArr.parent_email[0]}</div>
      <input onChange={(e) => postData(e)}
              name="city"
        type="text"
        className="inputBtn"
        placeholder={t("sign-up-form-city")}
      />
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.city && errArr.city[0]}</div>
      <select onChange={(e) => postData(e)} className="inputBtn" name="section" id="section" required>
        <option value="" disabled selected hidden>
          {t("sign-up-form-section")}
        </option>
        <option value="Sciences">{t("sign-up-form-section-public")}</option>
        <option value="Humanities">{t("sign-up-form-section-language")}</option>
      </select>
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.section && errArr.section[0]}</div>
      <select onChange={(e) => postData(e)}  className="inputBtn" name="grade" id="grade" required>
        <option value="" disabled selected hidden>
          {t("sign-up-form-grade")}
        </option>
        <option value="first">{t("sign-up-form-grade-first")}</option>
        <option value="second">{t("sign-up-form-grade-second")}</option>
        <option value="third">{t("sign-up-form-grade-third")}</option>
      </select>
      <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.grade && errArr.grade[0]}</div>
      <button type="submit" className="formBtn">
      {isPost ? (
                        <>
                           <BtnReload />  
                        </>
                    ) : ( <span>
                      {t("sign-up-form-button")}
                    </span>)}
      </button>
      <p className='text-danger m-0' style={{fontSize:"14px"}}>{msg}</p>
    </form>
  );
};

export default SignUpForm;
