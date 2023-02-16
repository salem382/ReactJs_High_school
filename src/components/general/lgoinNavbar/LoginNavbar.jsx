
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation} from "react-i18next";
import {Container, Row, Col } from "react-bootstrap";
import {setOpenSidebar} from '../../../store/sidebarRouteSlice';
import './loginNavbar.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginNavbar = () => {


    const dispatch = useDispatch();

    return (
        <section className='p-3 mb-3'> 
            <Container fluid>
                <Row className='align-items-center'>
                    <Col className="col-3">
                         <div >
                            <FontAwesomeIcon onClick={() => dispatch(setOpenSidebar(true))} role="button" className='fs-4' icon={faBars}/>
                         </div>
                    </Col>
                    <Col className='col-6 d-none d-lg-block'>
                         {/* <div className='position-relative w-50 m-auto'
                            style={{top:"-20px"}}
                         >
                            <input 
                            className='px-5 form-control w-100 position-absolute start-50 top-0 translate-middle-x ' 
                            type='text'
                            placeholder={t("navbar-search")}
                            style={{width:"50%"}}
                            />
                            <span className='position-absolute navbar-login-search'
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} 
                                  style={{color:"#A7A7A7"}}  
                                />
                            </span>
                         </div> */}
                    </Col>
                    <Col className="col-9 col-lg-3">
                         <div className='d-flex align-items-center justify-content-end'>
                             {/* <FontAwesomeIcon icon={faBell} className='mx-5 fs-4'/> */}
                             <Link to="/" className='mav-link'>
                                <img 
                                    src='/imgs/navbar/logo.png' alt='user'
                                /> 
                             </Link>
                         </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LoginNavbar;