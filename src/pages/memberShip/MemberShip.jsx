import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbars from "../../components/general/navbar/Navbar";
import Footer from "../../components/general/footer/Footer";


const Membership = () => {


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
        <section>  
            <Navbars />
                <Container >
                    <div className='my-5'>
                        <h3 className='my-3'>{t("membership-head")}</h3>
                        <p className='py-4'>{t("membership-p1")}</p>
                        <p className='py-4'>{t("membership-p2")}</p>
                    </div>
                </Container>
            <Footer />
        </section>
    )

}

export default Membership;