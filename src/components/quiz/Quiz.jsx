import './quiz.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowResult from '../general/showResult/ShowResult';
import { useRef } from 'react';
import {setIsEnd, inCreaseTotalSubmited} from '../../store/showResultSlice';



const Quiz = () => {


  let quizRef = useRef();
  const dispatch = useDispatch();
  const {isEnd, totalSubmited} = useSelector(state => state.End);

  const {currentQuiz} = useSelector(state => state.quiz);
  const [totalGrad, setTotalGrade] = useState(0);
  const {t} = useTranslation();

  const [totalQuestions, setTotalQuestions] = useState(0);;



  const handleChange = (e) => {
    e.target.parentElement.parentElement.parentElement.setAttribute("data-choice", e.target.getAttribute("data-val"));
  };

  const handelSubmit = (e) => {
      e.preventDefault();
      if (e.target.getAttribute("data-correct-ans") == e.target.getAttribute("data-choice")) {
          let quetsionGrade = e.target.getAttribute("data-grade");
          setTotalGrade(state => state + Number(quetsionGrade));
      }
      dispatch(inCreaseTotalSubmited());

      if (totalQuestions == totalSubmited ) {
          dispatch(setIsEnd(true));
      }
  }


  useEffect(() => {
    currentQuiz.questions && setTotalQuestions(currentQuiz.questions.length);
  },[])

  useEffect(() => {
    if (isEnd) {
      quizRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  },[isEnd])

 

  return (
    <div className='quiz'>

             {currentQuiz.questions && currentQuiz.questions.map((question) =><form onSubmit={(e) => handelSubmit(e)}  key={question.id}
              className='quizContainer pt-3'
              data-correct-ans= {question.correct_answer} data-grade= {question.question_grade} data-choice={""}
              >
                <p>
                  {question.body}
                </p>

                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                        data-val = {'answer_a'}
                        onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_a}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'answer_b'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_b}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'answer_c'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_c}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'answer_d'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.answer_d}</label>
                </div>


                <button onClick={(e) =>e.target.classList.add('stop-click') } className='success-button my-1'>{t("submit-btn")}</button>
              </form>

      )}
    {isEnd && <div ref={quizRef}>{<ShowResult totalGrad= {totalGrad} />}</div>}
    </div>
  );
};

export default Quiz;
