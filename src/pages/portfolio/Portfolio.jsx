import LoginNavbar from '../../components/general/lgoinNavbar/LoginNavbar';
import Sidebar from '../../components/general/sidebar/Sidebar';
import Wrapper from '../../components/general/Wrapper/Wrapper';
import GoodMorning from '../../components/accountComponent/goodMorning/GoodeMorning';
import ClassProgressSection from '../../components/accountComponent/classProgressSection/ClassProgressSection';
import TimeSpentSection from '../../components/accountComponent/timeSpentSection/TimeSpentSection';
import CircularProgressSection from '../../components/accountComponent/circularProgressSection/CircularProgressSection';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AllGrade from '../../components/general/AllGrade/AllGrade';

const Portfolio = () => {


    
  const [allGrade, setAllGrade] = useState([]);

  const getData = async () => {

    try {
        const {data} = await axios.get('http://localhost:5000/result', {
          headers: {
            token: `${localStorage.getItem("heighNewbrainsToken")}`
          }
      });

      setAllGrade([...data.results])
      console.log(data)
    }
    catch (error) {

      console.log (error);
    }
  }  
  
  useEffect(() => {
    getData();
  },[])


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
            
            {allGrade.map((grade, indx) => <Col key={indx} className='col-6'> 
                          <AllGrade  grade = {grade}/>
                        </Col>)
              }
          </Row>
        </Container>
        <div className='py-5'></div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
