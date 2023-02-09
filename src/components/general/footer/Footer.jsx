import { Container } from 'react-bootstrap';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {faFacebook, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  const { t } = useTranslation();


  
  return (
    <div className='footer'>
      <Container>
        <div className='row g-3'>
          <div className='col-6 col-md-6 col-lg-3 d-flex  align-items-start flex-column gap-4 '>
            <img src='./imgs/navbar/logo.png' alt='logo' />
            <p className='logo-para'>{t('footer-logo-para')}</p>
            <div className='footer-links'>
              <a href='https://www.facebook.com/Newbrains2023'><FontAwesomeIcon className='fs-3 icon' icon={faFacebook}/></a>
              <a href='https://www.instagram.com/newbrains2023'><FontAwesomeIcon className='fs-3 icon' icon={faInstagram}/></a>
              <a href='https://www.linkedin.com/in/new-brains'><FontAwesomeIcon className='fs-3 icon' icon={faLinkedin}/></a>
              <a href='https://www.youtube.com/@newbrains2023'><FontAwesomeIcon className='fs-3 icon' icon={faYoutube}/></a>
            </div>
            <div className='footer-payments'>
              <img src={require('../../../assets/imgs/footer/MasterCard.png')} alt='Master Card' />
              <img src={require('../../../assets/imgs/footer/visa.png')} alt='Visa' />
            </div>
            <div style={{ zIndex: 99}} className='termsAndConditions'>
              <Link to={'/terms'}><span className='text-primary'>{t("terms-heading")}</span></Link>
            </div>
          </div>
          <div className='col-6 col-md-6 col-lg-3 d-flex align-items-center flex-column gap-4 '>
            <h3 className='footer-title'>{t('footer-col-1-title')}</h3>
            <a href='./'>{t('footer-col-1-item-1')}</a>
            <a href='./'>{t('footer-col-1-item-1')}</a>
            <a href='./'>{t('footer-col-1-item-1')}</a>
            <a href='./'>{t('footer-col-1-item-1')}</a>
          </div>
          <div className='col-6 col-md-6 col-lg-3 d-flex align-items-center flex-column gap-4 '>
            <h3 className='footer-title'>{t('footer-col-2-title')}</h3>
            <a href='./'>{t('footer-col-2-item-1')}</a>
            <a href='./'>{t('footer-col-2-item-1')}</a>
            <a href='./'>{t('footer-col-2-item-1')}</a>
            <a href='./'>{t('footer-col-2-item-1')}</a>
          </div>
          <div className='col-6 col-md-6 col-lg-3 d-flex align-items-center flex-column gap-4 '>
            <h3 className='footer-title'>{t('footer-col-2-title')}</h3>
            <a href='./'>{t('footer-col-2-item-1')}</a>
            <a href='./'>{t('footer-col-2-item-1')}</a>
            <a href='./'>{t('footer-col-2-item-1')}</a>
            <a href='./'>{t('footer-col-2-item-1')}</a>
          </div>
          <span className='copyrights'>
            © 2023 NewBrains Website. Built using React.
          </span>
        </div>
      </Container>
      <div
        className='footer-shape'
        style={{
          background: "url('./imgs/home/footerShape.png') no-repeat left top",
          height: '45%',
          width: '100%',
        }}
      ></div>
    </div>
  );
};

export default Footer;
