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


const Portfolio = () => {

    const [allGrade, setAllGrade] = useState([]);


  const getData = async () => {

    try {
        const {data} = await axios.get('https://newbrainshigh.com/api/auth/getQuizResult', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("heighNewbrainsToken")}`
          }
      });

      setAllGrade([...data[0]])
      console.log(data[0])
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
            <Col>
              <ul className='mt-5'>
                  {allGrade.map((item)=> <li key={item.id} className='my-3 list-styled'> 
                      <span className='fw-bold fs-4'>{item.title} :</span> <span style={{color:"#080"}} className='fs-4'>{item.total_grade}</span> / <span style={{color:"#080"}} className='fs-4'>{item.correct_questions_grade}</span>
                  </li>)}
              </ul>
            </Col>
          </Row>
        </Container>
        <div className='py-5'></div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
