import './homeslider.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homeslider = () => {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.currentLang);

  

  return (
    <div
      className='banner w-100'
      style={{background:lang === "en" ?'url(' +`${require("../../../assets/imgs/home/bg-en.png")}` + ') no-repeat':
      'url(' +`${require("../../../assets/imgs/home/bg-ar.png")}` + ') no-repeat', backgroundSize:'cover'
    }}
    >
      <Container>
        <h1 className='banner__header--l1'>{t('home-hero-title-1')}</h1>
        <h1 className='banner__header--l2'>{t('home-hero-title-2')}</h1>
        <p className='banner__para'>
          {t('home-hero-para-1')} <br></br> {t('home-hero-para-2')}
        </p>
        <div className='action'>
          <button className='btn-solid'>
            <Link to={'/signup'} className='nav-link'>
              {t('home-hero-join')}
            </Link>
          </button>
          <button className='btn-outline'>
              <Link to='login' className='nav-link'>
                {t('home-hero-sign')}
              </Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Homeslider;
