import { Container } from 'react-bootstrap';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {faFacebook, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';



const Footer = () => {
  const { t } = useTranslation();


  
  return (
    <div className='footer'
      style={{ overflow:"hidden",
      background: "#e5eef4 url('./imgs/home/footerShape.png') no-repeat left bottom",
      height: '45%',
      width: '100%',}}
    >

      <Container>
        <div className='row g-3'
        >
          <div className='col-6 col-md-6 col-lg-4 d-flex  align-items-start flex-column gap-4 '>
            <img src='./imgs/navbar/logo.png' alt='logo' />
            <p className='logo-para'>{t('social-moving')}</p>
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
          </div>
          <div className='col-6 col-md-6 col-lg-4 d-flex align-items-center flex-column gap-4 '>
            <h3 className='footer-title'>{t('footer-col-1-title')}</h3>
           <Link to={'/membership'}><span className='about-link'>{t("footer-member")}</span></Link>
           <HashLink to={'/#start-conversition'}><span className='about-link'>{t("footer-conv")}</span></HashLink>
           <HashLink to={'/#Home-info'}><span className='about-link'>{t("footer-feat")}</span></HashLink>
           <Link to={'/teachers'}><span className='about-link'>{t("footer-teache")}</span></Link>
          </div>
          <div className='col-12  col-lg-4 d-flex align-items-center flex-column gap-4 '>
            <h3 className='footer-title'>{t("footer-policies")}</h3>
            <Link to={'/terms'}><span className='policies-item' >{t("terms-heading")}</span></Link>
            <Link to={'/privacypolicies'}><span className='policies-item' >{t("privacy-heading")}</span></Link>
            <Link to={'/returnpolicies'}><span className='policies-item' >{t("Refund-heading")}</span></Link>
            <Link to={'/CancilationPolicy'}><span className='policies-item' >{t("Cancellation-heading")}</span></Link>
          </div>
          <span className='copyrights'>
            {t("footer-text")} <br/>
            © 2023 NewBrains Website. Built  By <a href='https://cloudy-eg.com/' target={'_blank'} style={{textDecoration:'underline'}}>Cloudy</a> 
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
