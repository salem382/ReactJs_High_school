import {Container, Row, Col} from 'react-bootstrap';
import Progress from '../../Progress';
import { useTranslation } from 'react-i18next';

const ClassProgress = ({percent, color, topicName}) => {


  const {t} = useTranslation();

    return (
        <section className='my-3'>
          <Container>
            <Row className='align-items-center'>
              <Col className='col-2 d-none d-sm-block'>
                <div 
                  className="fw-bold fs-sm-5"
                  style={{color:'#2584E9',fontSize:'14px'}}
                >
                  {t("account-topic")}
                </div>
              </Col>
              <Col className='col-4 col-sm-2'>
                <div style= {{color :"#c2c2c2",fontSize:'14px'}}>
                 {topicName}
                </div>
              </Col>
              <Col className='ms-auto col-7'>
                <div className='d-flex align-items-center'>
                  <Progress color={color} percent={percent}/> <span className='mx-2' style={{color:color}}>{percent}</span> 
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    )
}

export default ClassProgress;