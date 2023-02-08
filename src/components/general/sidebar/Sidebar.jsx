import { useSelector, useDispatch } from "react-redux";
import {setOpenSidebar} from '../../../store/sidebarRouteSlice';
import './sidebar.scss';
import { faHouse, faUser, faCircleInfo, faRightFromBracket, faGear} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation} from "react-i18next";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LessonsAccordion from "../../lessonsComponent/lessonsAccoredion/LessonsAccordion";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TestAccordion from '../../general/testAccordion/TestAccordion';


const Sidebar = () => {

    
    const params = useParams ();

    const navigate = useNavigate();

    const location = useLocation();

    const {t} = useTranslation ();

    const dispatch = useDispatch();
    const {openSidebar, screeSize, sidebarWidth} = useSelector(state => state.sidebar);
    const {lang} = useSelector(state => state.currentLang);

  
    const handleLogout = async () => {

        let token = localStorage.getItem("heighNewbrainsToken");
        localStorage.removeItem("heighNewbrainsToken");
        navigate("/")
        try {
            const {data} = await axios.post('https://newbrainshigh.com/api/auth/userLogout',null, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
            })
            
        }catch (error) {
            console.log (error);
        }
    }

    return (
    
        <section>
            <div
            className='position-fixed w-100 h-100 top-0 start-0'
            style={{display:openSidebar && screeSize < 992 ? "block" : "none",zIndex:'99',
            background : "rgba(0, 0, 0, 0.3)"}}
            onClick = {() =>dispatch(setOpenSidebar(false))}
            ></div>
            <div style={lang == "en" ? { left: openSidebar ? '20px' : "-320px", width:"300px", top:"20px"} : 
            {right:openSidebar ? '20px' :  "-320px", width:"300px", top:"20px"}} className='sidebar border position-absolute'>
                <PersonalInfo />
                <ul className="list-unstyled m-auto  my-4 position-relative" style={{width:"90%", minHeight:"65vh"}}>
                    <div>
                        <li role={"button"} className="d-flex mb-3 align-items-center">
                                <NavLink 
                                    style={{
                                    textDecoration:"none",
                                    display:"flex",
                                    alignItems:"center"
                                    }}
                                    className={({ isActive }) =>
                                    isActive ? "active-item text-gray2" : "unactive-item text-gray2"
                                    }
                                    to='/subjects'>
                                <span className="mx-2">
                                    <FontAwesomeIcon icon={faHouse}/>
                                </span>
                                <p>{t("side-bar-home")}</p>
                            </NavLink>
                        </li>
                        {location.pathname == `/lessons/${params.id}` || location.pathname == `/test/${params.id}`   ? '' :
                            (
                                <li role={"button"} className="d-flex align-items-center text-gray2 mt-4">
                                    <NavLink 
                                    style={{
                                    textDecoration:"none",
                                    display:"flex",
                                    alignItems:"center"
                                    }}
                                    className={({ isActive }) =>
                                    isActive ? "active-item text-gray2" : "unactive-item text-gray2"
                                    }
                                        to='/portfolio'>
                                    <span className="mx-2">
                                        <FontAwesomeIcon icon={faUser}/>
                                    </span>
                                    <p>{t("side-bar-profile")}</p>
                                </NavLink>
                                </li>
                            )
                        }
                    </div>
                    {location.pathname === `/lessons/${params.id}` ? <LessonsAccordion /> :  location.pathname == `/test/${params.id}`? <TestAccordion /> : ""}
                    <div className="position-absolute w-100 bottom-0">


                        <li role={"button"} className="mb-4">
                            <NavLink 
                                style={{
                                    textDecoration:"none",
                                    display:"flex",
                                    alignItems:"center"
                                    }}
                                    className={({ isActive }) =>
                                    isActive ? "active-item text-gray2" : "unactive-item text-gray2"
                                    }
                                    to='/profile'>

                                    <span className="mx-2">
                                        <FontAwesomeIcon icon={faGear}/>
                                    </span>
                                    <p>{t("side-bar-setting")}</p>

                            </NavLink>
                        </li>

                        <li role={"button"} className="d-flex align-items-center text-gray2 mb-4">
                            <span className="mx-2">
                                <FontAwesomeIcon icon={faCircleInfo}/>
                            </span>
                            <p>{t("side-bar-more")}</p>
                        </li>
                        <li role={"button"} className="d-flex align-items-center text-gray2">
                            <span className="mx-2">
                                <FontAwesomeIcon icon={faRightFromBracket}/>
                            </span>
                            <p onClick={handleLogout}>{t("side-bar-logout")}</p>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Sidebar;


