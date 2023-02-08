import { faChevronRight, faChevronLeft, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";


const LessonsTopPart = () => {

    const params = useParams ();
    const location = useLocation();
    const {lang} = useSelector(state => state.currentLang)
    const {subject} = useSelector(state => state.currentSubject)
    const {currentUnit, activeVideo} = useSelector(state => state.units);
    const {currentQuiz} = useSelector(state => state.quiz);


    useEffect(() => {

        subject&& localStorage.setItem("subject", subject);
        currentUnit &&localStorage.setItem("currentUnit", currentUnit);
        activeVideo.name&& localStorage.setItem("activeVideo", activeVideo.name);
        currentQuiz.title&&localStorage.setItem("currentQuiz", currentQuiz.title);
    },[])


    return (
        <div className='d-flex mx-5 mb-4 align-items-center justify-content-between'
            style={{width:location.pathname == `/test/${params.id}`?"500px" : "300px",color:"#F44580"}}
        >
            <FontAwesomeIcon className='fs-5' icon={faNoteSticky}/>
            <p>{subject ? subject:localStorage.getItem("subject")}</p>
            <FontAwesomeIcon icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{currentUnit ?currentUnit: localStorage.getItem("currentUnit")}</p>
            <FontAwesomeIcon icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{activeVideo.name ? activeVideo.name :localStorage.getItem("activeVideo")}</p>
            {location.pathname == `/test/${params.id}` && <>
            <FontAwesomeIcon icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{currentQuiz.title ? currentQuiz.title :localStorage.getItem("currentQuiz")}</p>
            </> }
        </div>
    )
}

export default LessonsTopPart;