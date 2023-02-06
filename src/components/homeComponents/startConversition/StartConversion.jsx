import './startconversion.scss';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const StartConversion = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
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
            </li>
            <li>
              <h4>( {t('home-conv-title-3')} )</h4>
              <p>{t('home-conv-para-3')}</p>
              <div className='icons'>
                <img src='./imgs/home/SocialIconsINS.png' alt='' />
                <img src='./imgs/home/SocialIconsWB.png' alt='' />
                <img src='./imgs/home/SocialIconsTW.png' alt='' />
                <img src='./imgs/home/SocialIconsYT.png' alt='' />
              </div>
            </li>
          </ul>
          <form data-aos='fade-up'>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder={t('home-conv-form-name')}
            />
            <input
              className='form-input'
              type='text'
              name='phone'
              placeholder={t('home-conv-form-phone')}
            />
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder={t('home-conv-form-email')}
            />
            <textarea
              className='form-input'
              name='message'
              placeholder={t('home-conv-form-message')}
              rows='3'
            ></textarea>
            <button className='action'>
              <span> {t('home-conv-form-button')}</span>{' '}
              <img src='./imgs/home/rightArrow.png' alt='' />
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default StartConversion;
