import { faChevronRight, faChevronLeft, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from 'react-redux';


const LessonsTopPart = () => {

    const {lang} = useSelector(state => state.currentLang)
    const {subject} = useSelector(state => state.currentSubject)
    const {currentUnit, activeVideo} = useSelector(state => state.units)


    return (
        <div className='d-flex mx-5 mb-4 align-items-center justify-content-between'
            style={{width:"300px",color:"#F44580"}}
        >
            <FontAwesomeIcon className='fs-5' icon={faNoteSticky}/>
            <p>{subject}</p>
            <FontAwesomeIcon icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{currentUnit}</p>
            <FontAwesomeIcon icon={lang === "en" ? faChevronRight : faChevronLeft}/>
            <p>{activeVideo.name}</p>
        </div>
    )
}

export default LessonsTopPart;