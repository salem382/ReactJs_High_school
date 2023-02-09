import { faBars, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation} from "react-i18next";
import {Container, Row, Col } from "react-bootstrap";
import './navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import {setOpenMenu} from '../../../store/openMenuSlice';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TranslationMenu from '../transaltionMenu/TranslationMenu';
import { HashLink } from 'react-router-hash-link';


const Navbars = () => {

    const navigate = useNavigate ();
    const {openMenu} = useSelector(state => state.menu);
    const {user} = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const { t } = useTranslation();


    return (
       <section className="p-3 navbar-section">
            <Container >
                <Row className='align-items-center'>



                    <Col className="col-6 col-lg-2">
                        <Link to={"/"} className='nav-link'>
                        <div>
                             <img src="/imgs/navbar/logo.png"/>  
                        </div>
                        </Link>
                    </Col>

                    <Col className="col-5 d-none d-lg-block">
                        <div className="d-flex">
                            <div>
                            <HashLink to={"/#about-us"}>
                                <span role="button"  className="px-3 fw-bold text-black navbar-bold">{t("navbar-about-us")}</span>
                            </HashLink>
                            </div>
                            <Link to={"/teachers"} className='nav-link'>
                                <div role="button" className="mx-4 fw-bold navbar-bold">{t("navbar-our-Teachers")}</div>
                            </Link>
                            <HashLink to={"/#start-conversition"}>
                                 <span role="button" className="navbar-bold text-black fw-bold">{t("navbar-contact-us")}</span>
                            </HashLink>
                        </div>
                    </Col>


                    <Col className="col-5 d-none d-lg-block">
                        <div className="d-flex justify-content-end align-items-center">
                            {localStorage.getItem("heighNewbrainsToken") ? (<>
                                <img src={user.image ? "https://newbrainshigh.com/profileImages/users/" + user.image:"/imgs/navbar/user.webp"} alt='user'
                                    style={{width:"55px", height:"55px"}}
                                    className="rounded-circle mx-4"
                                    role="button"
                                    onClick={() => navigate('/subjects')}
                                />
                            </>) : (
                                <>
                                    <div className="d-flex align-items-center">
                                    <Link to={"/login"} className='nav-link'>
                                        <div role="button" className="fw-bold navbar-log-in text-blue p-2 px-4 btn-reduis">{t("navbar-log-in")}</div>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <div role="button" className="text-blue navbar-sign-up fw-bold border-blue p-2 px-4 btn-reduis mx-4">{t("navbar-sign-up")}</div>
                                    </Link>
                                    </div>  
                                </>
                            )}  
                            <div>  <TranslationMenu />  </div>
                        </div>
                    </Col>





                    <Col className="col-6 d-lg-none">




                        <div  onClick={(e) => e.stopPropagation()} className='d-flex justify-content-end position-relative align-items-center'>
                            {localStorage.getItem("heighNewbrainsToken") ? (<>
                                <img src={user.image ?  "https://newbrainshigh.com/profileImages/users/" +user.image:"/imgs/navbar/user.webp"} alt='user'
                                    style={{width:"55px", height:"55px", cursor:"pointer"}}
                                    className="rounded-circle"
                                    onClick={() =>dispatch(setOpenMenu(true))}
                                />
                            </>):(<>
                             <FontAwesomeIcon onClick={() =>dispatch(setOpenMenu(true))} role="button" className='fs-4' icon={faBars}/>
                            </>)}


                            <div className='position-absolute bg-white border py-3 rounded mx-4'
                                style={{marginTop:localStorage.getItem("heighNewbrainsToken") && "30px",display:openMenu ? 'block':'none',top:"30px", zIndex:"99",  boxShadow:"0px 0px 3px rgba(0, 0, 0, 0.3)",
                                width:"150px"
                            }}
                            >
                                 {localStorage.getItem("heighNewbrainsToken") ? (
                                    <Link to='/subjects' className='nav-link'>
                                    <div className='fw-bold view-profile p-1 text-center w-75 mb-2 m-auto'
                                       role="button"
                                    >{t("navbar-viewprofile")}</div>
                                    </Link>
                                 ) :  "" }



                                 <p>
                                    <a onClick={() => dispatch(setOpenMenu(false))}
                                     href="#about-us" role="button" 
                                     className='nav-item fw-bold py-2 text-center text-black d-block'>
                                        {t("navbar-about-us")}
                                    </a>
                                 </p>
                                <Link to={"/teachers"} className='nav-link' onClick={() => dispatch(setOpenMenu(false))}>
                                    <p  role="button" className='nav-item  fw-bold py-2 text-center text-ramad '>{t("navbar-our-Teachers")}</p>
                                </Link>
                                <p>
                                   <a  onClick={() => dispatch(setOpenMenu(false))}  
                                   role="button" href="#start-conversition" 
                                   className='nav-item  fw-bold py-2 text-center pb-2 text-black d-block'>{t("navbar-contact-us")}</a>
                                </p>





                                {localStorage.getItem("heighNewbrainsToken") ? "" : (
                                    <div className='border-top'>
                                        <Link to={"/signup"} className='nav-link'>
                                            <p role="button" className='nav-item fw-bold nav-item-log py-2 text-blue d-flex justify-content-around align-items-center'>
                                                <span className='mx-2'>{t("navbar-sign-up")}</span>
                                                <FontAwesomeIcon className='d-sm-block mt-1' icon={faArrowRightToBracket}/>
                                            </p>
                                        </Link>
                                        <Link to={"/login"} className='nav-link'>
                                            <p role="button" className='nav-item fw-bold nav-item-log py-2 py-1  text-blue d-flex justify-content-around align-items-center'>
                                                <span className='mx-2'>{t("navbar-log-in")}</span>
                                                <FontAwesomeIcon className='d-sm-block mt-1' icon={faArrowRightToBracket}/>
                                            </p>
                                        </Link>  
                                    </div>
                                )}


                            </div>
                        </div>
                    
                    
                    </Col>




                </Row>
            </Container>
       </section>
    )
}
export default Navbars;