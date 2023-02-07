import { Container } from 'react-bootstrap';
import './Terms.scss';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Terms = () => {
  const { t } = useTranslation();


  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };


  useEffect(() => {
    scrollToTop();
  },[]);

  




  return (
    <Container>
      <div className='terms'>
        <h1>{t('terms-heading')}</h1>
        <p>{t('terms-para-1')}</p>
        <p>{t('terms-para-2')}</p>
        <ul>
          <li>{t('term-1')}</li>
          <li>{t('term-2')}</li>
          <li>{t('term-3')}</li>
          <li>{t('term-4')}</li>
          <li>{t('term-5')}</li>
          <li>{t('term-6')}</li>
          <li>{t('term-7')}</li>
          <li>{t('term-8')}</li>
          <li>{t('term-9')}</li>
          <li>{t('term-10')}</li>
          <li>{t('term-11')}</li>
          <li>{t('term-12')}</li>
        </ul>
      </div>
    </Container>
  );
};

export default Terms;
