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

  const [Subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  
  const dataFetch = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const {data} = await axios.get(
        "https://newbrains-edu.com/api/auth/getSubjects",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      setSubjects([...data.subjects])
    }
    catch (error) {
      console.log (error)
      setIsError(true);
    }
    setIsLoading(false);
 
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
      {isLoading ? <PageReload /> :isError?
         <div className='text-danger fs-5 fw-bold my-4 w-50 m-auto'>Error occurred while fetching data</div> 
         :Subjects.length === 0 ?<div className=' fs-5 fw-bold my-4 w-50 m-auto'>No Subjects found</div> : (
          <>
            <Wrapper>
              <Container className='px-5'>
                <Row className='g-4'>
                  {Subjects.map(element => <Col md={4} key={element.id}>
                      <Link onClick={() => dispatch(setCurrentSubject(element.name))}  to={`/lessons/${element.id}`} className='nav-link'>
                        <Subject subjectData = {element} />
                      </Link>
                    </Col>
                  )}
                </Row>
              </Container>
            </Wrapper>
          </>  
         )}
      
    </div>
  );
};

export default Subjects;
