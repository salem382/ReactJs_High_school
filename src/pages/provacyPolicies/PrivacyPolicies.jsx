import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbars from '../../components/general/navbar/Navbar';
import Footer from '../../components/general/footer/Footer';

const PrivacyPolicies = () => {
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
            <h3 className='my-4'>{t("privacy-head")}</h3>
            <p className='my-3'>{t("privacy-p")}</p>
            <h3 className='my-4'>{t("privacy-head1")}</h3>
            <p className='my-3'>{t("privacy-p1")}</p>
            <h3 className='my-4'>{t("privacy-head2")}</h3>
            <p className='my-3'>{t("privacy-p2")}</p>
            <h3 className='my-4'>{t("privacy-head3")}</h3>
            <p className='my-3'>{t("privacy-p3")}</p>
            <h3 className='my-4'>{t("privacy-head4")}</h3>
            <p className='my-3'>{t("privacy-p4")}</p>
            <h3 className='my-4'>{t("privacy-head5")}</h3>
            <p className='my-3'>{t("privacy-p5")}</p>
            <h3 className='my-4'>{t("privacy-head6")}</h3>
            <p className='my-3'>{t("privacy-p6")}</p>
            <h3 className='my-4'>{t("privacy-head7")}</h3>
            <p className='my-3'>{t("privacy-p7")}</p>
            <h3 className='my-4'>{t("privacy-head8")}</h3>
            <p className='my-3'>{t("privacy-p8")}</p>
        </div>
        </Container>
        <Footer />
    </>
  );
};

export default PrivacyPolicies;
