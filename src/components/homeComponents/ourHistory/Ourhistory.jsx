import './ourhistory.scss';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const OurHistory = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className='history-bk' id='about-us'>
      <Container className='history'>
        <div
          className='content'
          data-aos='fade-up
'
        >
          <h1 className='header'>{t('home-history-title')}</h1>
          <p className='para'>{t('home-history-para')}</p>
        </div>
        <div
          className='video'
          data-aos='fade-up
fade-right'
        >
          <div className='thumb'>
            <img src='./imgs/home/videoImg.png' alt='' />
            <img src='./imgs/home/playIcon.png' className='play-icon' alt='' />
          </div>
          <div className='vidSrc'>
            {/* <iframe
              width={'100%'}
              src='https://www.youtube.com/embed/w7ejDZ8SWv8'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>{' '} */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurHistory;
