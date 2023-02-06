import LoginNavbar from '../../components/general/lgoinNavbar/LoginNavbar';
import Sidebar from '../../components/general/sidebar/Sidebar';
import Wrapper from '../../components/general/Wrapper/Wrapper';
import GoodMorning from '../../components/accountComponent/goodMorning/GoodeMorning';
import ClassProgressSection from '../../components/accountComponent/classProgressSection/ClassProgressSection';
import TimeSpentSection from '../../components/accountComponent/timeSpentSection/TimeSpentSection';
import CircularProgressSection from '../../components/accountComponent/circularProgressSection/CircularProgressSection';
import { Container, Row, Col } from 'react-bootstrap';


const Portfolio = () => {

  
  return (
    <section
      style={{
        background: 'url("./imgs/profile/profileBK.png") no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <LoginNavbar />
      <Sidebar />
      <Wrapper>
        <Container>
          <Row>
            <Col className='col-12'>
              <GoodMorning />
            </Col>
            <Col lg={6}>
              <ClassProgressSection />
            </Col>
            <Col lg={6}>
              <TimeSpentSection />
            </Col>
            <Col className='col-12'>
              <CircularProgressSection />
            </Col>
          </Row>
        </Container>
        <div className='py-5'></div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
