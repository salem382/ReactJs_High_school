import { Col, Container, Row } from 'react-bootstrap';
import './GoodeMorning.scss';
import { useTranslation } from 'react-i18next';

const GoodMorning = () => {

  const {t} = useTranslation();

  return (
    <Container>
      <div
        className='morningBanner rounded mt-5 p-4'
        style={{ background: '#00C8D5' }}
      >
        <Row>
          <Col md={7} className='col-12'>
            <div className='ps-0 ps-md-3 text-center text-md-start'>
              <h2 className='mt-3'>{t("account-good-morning")}</h2>
              <p className='mt-4 fs-6'>
              {t("account-good-part-one")}<span className='fw-bold mx-1'>{t("account-good-part-two")}</span> 

              {t("account-good-part-three")} <br />
                {t("account-good-part-four")}
              </p>
            </div>
          </Col>
          <Col className='col-5 d-none d-md-block morning-img'>
            <img
              className=' d-block ms-4 mt-2'
              src='./imgs/profile/morningImg.png'
              alt='arrow'
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default GoodMorning;
