import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbars from '../../components/general/navbar/Navbar';
import Footer from '../../components/general/footer/Footer';

const ReturnPolicies = () => {
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
    <>
        <Navbars/>
        <Container>
        <div className='my-5'>
            <h3 className='my-4'>{t("return-head")}</h3>
            {t("return-policies")}
        </div>
        </Container>
        <Footer />
    </>
  );
};

export default ReturnPolicies;
