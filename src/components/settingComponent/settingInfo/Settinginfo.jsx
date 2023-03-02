import './settinginfo.scss';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import LoadingBtn from '../../general/btnReload/BtnReload';
import {getUser} from '../../../store/currentUser';
import { useRef } from 'react';
import {toast} from 'react-toastify' ;




const Settinginfo = () => {

  const fullName = useRef();
  const Phone = useRef();
  const Parent_email = useRef();
  const Parent_phone = useRef();
  const city = useRef();
  const state = useRef();




  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.currentUser);
  const [fileUrl, setFileUrl] = useState();
  
  const [image, setImage] = useState('');
  const [userData, setUserData] = useState({
    name:"",
    phone:"",
    parent_email:"",
    parent_phone:"",
    state:"",
    city:""
  });

  const [isPost, setIsPost] = useState(false);
  const [errArr, setErrArr] = useState({});
  
  const postData = (e) => {
    // formData.append(e.target.name, e.target.value); 
    let usr = {...userData};
    usr[e.target.name] = e.target.value;
    setUserData({...usr})
  };

  const postDataForFile = async (e) => {
    setImage(e.target.files[0]);
    setFileUrl(URL.createObjectURL(e.target.files[0]));

    // formData.append("image"); 
  };

  const clearData = () => {
    Parent_email.current.value = "";
    Parent_phone.current.value = "";
    Phone.current.value = "";
    fullName.current.value = "";
    city.current.value = "";
    state.current.value = "";
  }

  useEffect(() => {
    user.image ? setFileUrl("https://newbrains-edu.com/profileImages/users/" +user.image) :setFileUrl('/imgs/navbar/user.webp');
  },[user])


  const getData = async () => {

    let formData = new FormData(); 
    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    formData.append("parent_phone", userData.parent_phone);
    formData.append("parent_email", userData.parent_email);
    formData.append("city", userData.city);
    formData.append("state", userData.state);
    formData.append("image", image);


    setIsPost(true);

    try {
      const { data } = await axios.post(
        'https://newbrains-edu.com/api/auth/userUpdateProfile',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('heighNewbrainsToken')}`,
            'content-type': 'multipart/form-data'
          }
        }
      );
      dispatch(getUser());
      setIsPost(false);
      setErrArr({});
      clearData();
      toast.success(`profile updated`,{position: 'bottom-left'});
      console.log (data);
    } catch (error) {
      console.log (error);
      setIsPost(false);
      setErrArr({...JSON.parse(error.response.data)});
    }
  };


  const submitData = async (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className='mt-5 setting-info'>
      <Container>
        <form className='mt-4' onSubmit={submitData}>
          <Row>
            <Col md={3}>
              <div
                className='position-relative m-auto'
                style={{ width: '150px', height: '150px' }}
              >
                <img
                  className='rounded-circle position-absolute top-0 end-0 bottom-0 me-4 me-md-0'
                  src={fileUrl}
                  alt='avtar'
                  style={{ zIndex: '1', width: '100px', height: '100px' }}
                />
                <input
                  onChange={(e) => postDataForFile(e)}
                  role={'button'}
                  name='image'
                  className='position-absolute top-0 end-0 bottom-0'
                  style={{ zIndex: '2', opacity: '0' }}
                  type='file'
                  accept='image/png, image/jpeg'
                />
                <div className='text-danger pt-5' style={{ fontSize: '14px' }}>
                  {errArr.image && errArr.image[0]}
                </div>
              </div>
            </Col>
            <Col md={9} className='col-12'>
              <div className='setting-name'>
                <input
                  onChange={(e) => postData(e)}
                  name='name'
                  placeholder={user.name ? `${t('profile-personal-information-form-first-name')} :  ${user.name}` : t(
                    'profile-personal-information-form-first-name'
                  )}
                  type='text'
                  ref={fullName}
                />
                <div className='text-danger' style={{ fontSize: '14px' }}>
                  {errArr.name && errArr.name[0]}
                </div>
              </div>
              <div>
                <input
                  onChange={(e) => postData(e)}
                  name='phone'
                  placeholder={user.phone ? ` ${t('profile-personal-information-form-phone')} : ${user.phone}` : t('profile-personal-information-form-phone')}
                  className='me-1 me-md-0'
                  type='number'
                  ref={Phone}
                />
                <div className='text-danger' style={{ fontSize: '14px' }}>
                  {errArr.name && errArr.phone[0]}
                </div>
              </div>
              <div>
                <input
                  onChange={(e) => postData(e)}
                  name='parent_email'
                  placeholder={user.parent_email ?  `${t('parent_email')} : ${user.parent_email}` :  t('parent_email')}
                  type='email'
                  ref={Parent_email}
                />
                <div className='text-danger' style={{ fontSize: '14px' }}>
                  {errArr.name && errArr.parent_email[0]}
                </div>
              </div>
              <div>
                <input
                  onChange={(e) => postData(e)}
                  name='parent_phone'
                  placeholder={user.parent_phone ?   `${t(
                    'profile-personal-information-form-parent-phone'
                  )} : ${user.parent_phone}` : t(
                    'profile-personal-information-form-parent-phone'
                  )}
                  type='number'
                  ref={Parent_phone}
                />
                <div className='text-danger' style={{ fontSize: '14px' }}>
                  {errArr.name && errArr.parent_phone[0]}
                </div>
              </div>

              <div>
                <input
                  onChange={(e) => postData(e)}
                  name='state'
                  placeholder={user.state ?  ` ${ t('profile-personal-information-form-state')}  : ${user.state}` :  t('profile-personal-information-form-state')}
                  type='text'
                  ref={state}
                />
                <div className='text-danger' style={{ fontSize: '14px' }}>
                  {errArr.name && errArr.state[0]}
                </div>
              </div>
              <div>
                <input
                  onChange={(e) => postData(e)}
                  name='city'
                  placeholder={user.city ? `${t('profile-personal-information-form-city')} : ${user.city}` : t('profile-personal-information-form-city')}
                  type='text'
                  ref={city}
                />
                <div className='text-danger' style={{ fontSize: '14px' }}>
                  {errArr.name && errArr.city[0]}
                </div>
              </div>
              <div className='btns-setting-send-data mt-4 d-flex justify-content-end'>
                {/* <button className='light-button mx-3'>CANCEL</button> */}
                <button className='primary-button' style={{width:"200px"}}>
                  {isPost ? <LoadingBtn /> : <span>{t('profile-password-form-button-save')}</span>}
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Settinginfo;
