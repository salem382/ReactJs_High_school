import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import './testAccordion.css';
import {setCurrentQuiz} from '../../../store/quizSlice';
import {setIsEnd, defaultTotalSubmited} from '../../../store/showResultSlice';




const TestAccordion = () => {

    const dispatch = useDispatch();

    const {activeVideo} = useSelector(state => state.units);
    const {quizess, currentQuizIndex, currentQuiz} = useSelector(state => state.quiz);

    const handleClick = (e) => {
        dispatch(setCurrentQuiz(e.target.getAttribute("data-quizindx")));
        dispatch(setIsEnd(false));
        dispatch(defaultTotalSubmited());
    }



    return (
        <div className="accordion-section w-75 m-auto">
           <Accordion defaultActiveKey="0" flush>
               <Accordion.Item eventKey={"0"}>
                        <Accordion.Header>{activeVideo.name ? activeVideo.name :localStorage.getItem("activeVideo")}</Accordion.Header>
                        <Accordion.Body>
                            <ul className='list-unstyled p-0 ul-item m-0 p-0'>
                            {quizess.map((quiz, quizIndx) => <li
                                style={{color:currentQuizIndex == quizIndx && '#00c8d5'}}
                                className='m-0 py-3' key={quiz._id}
                                 data-quizindx={quizIndx}
                                 onClick={(e)=>handleClick(e)}
                                 >{quiz.test_name}</li>)}
                            </ul>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default TestAccordion;