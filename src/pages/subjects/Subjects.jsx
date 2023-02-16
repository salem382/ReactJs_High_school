import { Container, Row, Col } from 'react-bootstrap';
import Subject from '../../components/subjectsComponent/subject/subject';
import Sidebar from '../../components/general/sidebar/Sidebar';
import Wrapper from '../../components/general/Wrapper/Wrapper';
import LoginNavbar from '../../components/general/lgoinNavbar/LoginNavbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PageReload from '../../components/general/pageReload/PageReload';
import {setCurrentSubject} from '../../store/currentSubjectSlice';
import { useDispatch } from 'react-redux';

const Subjects = () => {



  const dispatch = useDispatch();

  const token = localStorage.getItem("heighNewbrainsToken");

  const [subjects, setSubjects] = useState([]);
  const [isOk , setIsOk] = useState(true);

  const dataFetch = async () => {
    try {
      const {data} = await axios.get(
        "https://newbrainshigh.com/api/auth/getSubjects",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.subjects.length > 0) {
        setSubjects([...data.subjects])
        setIsOk(true);
      }
      else {
        setIsOk(false);
      }

    }
    catch (error) {
      console.log (error)
    }
    
 
  };

  useEffect(() => {
    dataFetch();
  }, []);


  return (
    <div
      className='subjects'
      style={{
        background: 'url("./imgs/subjects/subjectsBK.png") no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <LoginNavbar />
      <Sidebar />
      {subjects.length > 0  && isOk? (
        <>
          <Wrapper>
            <Container className='px-5'>
              <Row className='g-4'>
                {subjects.map(element => <Col md={4} key={element.id}>
                    <Link onClick={() => dispatch(setCurrentSubject(element.name))}  to={`/lessons/${element.id}`} className='nav-link'>
                      <Subject subjectData = {element} />
                    </Link>
                  </Col>
                )}
              </Row>
            </Container>
          </Wrapper>
        </>  
         
      ) :!isOk && subjects.length === 0 ? (
        <div className='w-50 m-auto fs-3 fw-bold'>
            <p>No Subjects Found !</p>
        </div>
      )
      : <>
        <PageReload />
      </>}
      
      
    </div>
  );
};

export default Subjects;
