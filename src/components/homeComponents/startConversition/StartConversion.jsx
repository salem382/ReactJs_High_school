import './startconversion.scss';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useRef } from 'react';
import BtnReload from '../../general/btnReload/BtnReload';
import {toast} from 'react-toastify' ;


const StartConversion = () => {
  
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const messageInput = useRef();

  const [isPost, setIsPost] = useState (false);
  const [userData, setUserData] = useState({
      name:"",
      email:"",
      phone:"",
      message:""
  });

  const clearData = () => {
      nameInput.current.value = "";
      emailInput.current.value = "";
      phoneInput.current.value = "";
      messageInput.current.value = "";
  }


  const postData = (e) => {
      let usr = {...userData};
      usr[e.target.name] = e.target.value;
      setUserData({...usr})
  }


  const getData = async() => {
      setIsPost(true);
      try {
          const {data} = await axios.get(`https://newbrains-edu.com/api/contactUs?name=${userData.name}&message=${userData.message}&phone=${userData.phone}&email=${userData.email}`,null, {
            params:{
              name:userData.name,
              message:userData.message,
              phone:userData.phone,
              email:userData.email
            }
          })
          clearData();
          setIsPost(false);
          toast.success(`Message Sent`,{position: 'bottom-left'});
      }
      catch (error) {
          setIsPost(false);
      }
  }

  const submitData = async (e) => {
      e.preventDefault();
      getData();
  }




  return (
    <Container>
      <div className='conv' id='start-conversition'>
        <h1 className='title' data-aos='flip-up'>
          {t('home-conv-title-main')}
        </h1>
        <div className='content'>
          <ul className='links' data-aos='fade-up'>
            <li>
              <h4>( {t('home-conv-title-1')} )</h4>
              <p>{t('home-conv-para-1')}</p>
            </li>
            <li>
              <h4>( {t('home-conv-title-2')} )</h4>
              <p>{t('home-conv-para-2')}</p>
              <p>01553043622</p>
            </li>
          </ul>
          <form data-aos='fade-up' onSubmit={(e) =>submitData(e)}>
            <input
              onChange={(e) => postData(e)}
              name='name'
              className='form-input'
              type='text'
              placeholder={t('home-conv-form-name')}
              ref = {nameInput}
            />
            <input
             onChange={(e) => postData(e)}
              className='form-input'
              type='text'
              name='phone'
              placeholder={t('home-conv-form-phone')}
              ref={phoneInput}
            />
            <input
             onChange={(e) => postData(e)}
              className='form-input'
              type='email'
              name='email'
              placeholder={t('home-conv-form-email')}
              ref={emailInput}
            />
            <textarea
              className='form-input'
              onChange={(e) => postData(e)}
              name='message'
              placeholder={t('home-conv-form-message')}
              rows='3'
              ref={messageInput}
            ></textarea>
            <button className='action'>
              {isPost ? <BtnReload/> : (<>
                <span> {t('home-conv-form-button')}</span>{' '}
                <img src='./imgs/home/rightArrow.png' alt='' />
              </>)}
            </button>
          </form>
        </div>
    
      </div>
    </Container>
  );
};

export default StartConversion;
