import './settinginfo.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


const Settinginfo = () => {

  const {t} = useTranslation();
  
  const {user} = useSelector(state => state.currentUser);
  const [fileUrl, setFileUrl] = useState(user.image ? user.image :'/imgs/navbar/user.webp');

  const [isPost, setIsPost] = useState (false);
  const [errArr, setErrArr] = useState({});
  const [msg, setMsg] = useState('');

  const [userData, setUserData] = useState({
      name:"Updated Ahmed",
      phone:"000000000",
      parent_phone:"000000000",
      parent_email:"pp@gmail.com",
      city: "Egypt",
      state:"cairo",
      image : {}
  });


  const postData = (e) => {
      let usr = {...userData};
      newForm.append(e.target.name, e.target.value);
      // usr[e.target.name] = e.target.value;
      // setUserData({...usr})
      // console.log (usr);
  }

  const postDataForFile = async (e) => {
    

      setFileUrl(URL.createObjectURL(e.target.files[0]));
      newForm.append("name","aaaaaaaa");
      newForm.append("phone",userData.phone);
      newForm.append("parent_phone",userData.parent_phone);
      newForm.append("parent_email",userData.parent_email);
      newForm.append("city",userData.city);
      newForm.append("state",userData.state);
      newForm.append("image",e.target.files[0]);
  }

 
  const getData = async() => {
    
      setIsPost(true);

      try {
          const {data} = await axios.post('https://newbrainshigh.com/api/auth/userUpdateProfile',newForm,
          {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem("heighNewbrainsToken")}`
              }
          })
          setIsPost(false);
      }
      catch (error) {
          setIsPost(false);
          console.log (error.response.data);
          console.log (error);
      }
  }

  const submitData = async (e) => {
      e.preventDefault();
      getData();
  }

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
                  onChange={(e) =>postDataForFile(e)}
                  role={'button'}
                  name='image'
                  className='position-absolute top-0 end-0 bottom-0'
                  style={{ zIndex: '2', opacity:"0"}}
                  type='file'
                  accept='image/png, image/jpeg'
                />
                <div className='text-danger pt-5' style={{ fontSize:"14px"}}>{errArr.name && errArr.image[0]}</div>
              </div>
            </Col>
            <Col md={9} className='col-12'>
              <div className='setting-name'>
                <input onChange={(e) =>postData(e)} name='name' placeholder={t("profile-personal-information-form-first-name")} type='text' />
                <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.name && errArr.name[0]}</div>
              </div>
              <div >
                <input
                  onChange={(e) =>postData(e)}
                  name='phone'
                  placeholder={t("profile-personal-information-form-phone")}
                  className='me-1 me-md-0'
                  type='number'
                />
                <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.name && errArr.phone[0]}</div>
              </div>
              <div>
                <input
                  onChange={(e) =>postData(e)}
                  name='parent_email'
                  placeholder={t("parent_email")}
                  type='email'
                />
                <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.name && errArr.parent_email[0]}</div>
              </div>
              <div>
                <input
                  onChange={(e) =>postData(e)}
                  name='parent_phone'
                  placeholder={t("profile-personal-information-form-parent-phone")}
                  type='number'
                />
                 <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.name && errArr.parent_phone[0]}</div>
              </div>

              <div>
                <input onChange={(e) =>postData(e)} name='state'  placeholder={t("profile-personal-information-form-state")} type='text' />
                <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.name && errArr.state[0]}</div>
              </div>
              <div>
                <input onChange={(e) =>postData(e)} name='city'  placeholder={t("profile-personal-information-form-city")} type='text' />
                <div className='text-danger'style={{ fontSize:"14px"}}>{errArr.name && errArr.city[0]}</div>
              </div>
              <div className='btns-setting-send-data mt-4 pb-5 d-flex justify-content-end'>
                {/* <button className='light-button mx-3'>CANCEL</button> */}
                <button className='primary-button'>{t("profile-password-form-button-save")}</button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Settinginfo;
