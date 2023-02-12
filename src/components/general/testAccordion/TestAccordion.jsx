import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import './testAccordion.css';
import {setCurrentQuiz} from '../../../store/quizSlice';
import {setIsEnd,defaultTotalSubmited, defaultTotalGrade} from '../../../store/showResultSlice';
import { useEffect } from 'react';



const TestAccordion = () => {

    const dispatch = useDispatch();

    const {activeVideo} = useSelector(state => state.units);
    const {quizess, curentQuizIndx} = useSelector(state => state.quiz);

    const handleClick = (e) => {
        dispatch(setCurrentQuiz(e.target.getAttribute("data-quizindx")));
        dispatch(setIsEnd(false));
        dispatch(defaultTotalSubmited());
        dispatch(defaultTotalGrade());
    }



    return (
        <div className="accordion-section">
           <Accordion defaultActiveKey="0" flush>
               <Accordion.Item eventKey={"0"}>
                    <Accordion.Header>{activeVideo.name ? activeVideo.name :localStorage.getItem("activeVideo")}</Accordion.Header>
                        <Accordion.Body>
                            <ul className='list-unstyled p-0 ul-item'>
                                {quizess.map((quiz, quizIndx) => <li key={quiz.id}
                                style={{color:quizIndx == curentQuizIndx ? "#00c8d5" : ""}}
                                 data-quizindx={quizIndx}
                                 onClick={(e)=>handleClick(e)}
                                 >{quiz.title}</li>)}
                            </ul>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default TestAccordion;