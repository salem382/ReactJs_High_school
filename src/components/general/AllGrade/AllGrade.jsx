import { faChevronRight, faChevronLeft, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";


const AllGrade = ({grade}) => {


    const params = useParams ();
    const location = useLocation();
    const {lang} = useSelector(state => state.currentLang)
    const {subject} = useSelector(state => state.currentSubject)
    const {currentUnit, activeVideo} = useSelector(state => state.units);
    const {currentQuiz} = useSelector(state => state.quiz);



    return (
        <div className='d-flex align-items-center mx-5 mb-4 justify-content-between my-3'
            style={{width:"200px",color:"#000"}}
        >
            <FontAwesomeIcon className='fs-5 icon' icon={faNoteSticky} />
            <p>{grade.assignment_name}</p>
            <FontAwesomeIcon className='icon' icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{grade.total_grade}</p>
            <p>/</p>
            <p>{grade.student_grade}</p>
           
        </div>
    )
}

export default AllGrade;