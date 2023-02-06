import { useTranslation} from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import './transalte.scss';
import { useDispatch } from "react-redux";
import {setCurrentLang} from '../../../store/currentLangSlice'




const TranslationMenu = () => {

  const dispatch = useDispatch();
    
  const currentLang = Cookies.get("i18next") || "en";

  const [lang, setLang] = useState(currentLang);

  const changeLanguage = (type) => {
    i18next.changeLanguage(type);
    setLang(type);
  }

  useEffect(() => {
    document.getElementById("html").lang = currentLang;
    dispatch(setCurrentLang(currentLang));
  },[lang])


    return (
       <div>
       
          <Dropdown className="transalte-drop-down">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FontAwesomeIcon className="ms-1" icon={faGlobe}/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="fw-bold" onClick={() =>changeLanguage("en")} >
                  <div>
                      <img className="mx-1" style={{width:"25px", height:"25px"}} src="/imgs/translation/end.png" alt="england-flag"/>
                      <span>English</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold" onClick={() =>changeLanguage("ar")}>
                  <div>
                        <img className="mx-1" style={{width:"25px", height:"25px"}} src="/imgs/translation/saudia.png" alt="england-flag"/>
                        <span>العربية</span>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
       </div>
    )
}

export default TranslationMenu;