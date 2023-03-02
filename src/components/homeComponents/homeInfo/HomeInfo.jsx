import './homeinfo.scss';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const Homeinfo = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <Container>
      <div className='info' id='Home-info'>
        <div className='info__img'>
          <img data-aos='fade-up' src='./imgs/home/people.png' alt='' />
        </div>
        <div data-aos='fade-up' className='content'>
          <h1 className='content__header'>{t('home-info-title')}</h1>
          <p className='content__para'>{t('home-info-para')}</p>
          <ul className='features'>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/clockIcon.png' alt='' />
              </div>
              <div className='title'>{t('home-info-feature-1-title')}</div>
              <div className='para'>{t('home-info-feature-1-para')}</div>
            </li>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/peopleIcon.png' alt='' />
              </div>
              <div className='title'> {t('home-info-feature-2-title')}</div>
              <div className='para'>{t('home-info-feature-2-para')}</div>
            </li>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/enjoyIcon.png' alt='' />
              </div>
              <div className='title'> {t('home-info-feature-3-title')}</div>
              <div className='para'>{t('home-info-feature-3-para')}</div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Homeinfo;
