import './quiz.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowResult from '../../components/general/showResult/ShowResult'
import { useRef } from 'react';
import {setIsEnd, inCreaseTotalSubmited, defaultTotalGrade, defaultTotalSubmited, setTotalGrade} from '../../store/showResultSlice';


const Quiz = () => {


  let quizRef = useRef();
  const dispatch = useDispatch();
  const {isEnd, totalSubmited} = useSelector(state => state.End);
  const {currentQuiz, totalQuestions} = useSelector(state => state.quiz);
  const [answers, setAnswers] = useState([]);

  const {t} = useTranslation();

  
  const handleChange = (e) => {
    e.target.parentElement.parentElement.parentElement.setAttribute("data-choice", e.target.getAttribute("data-val"));
  };

  const handelSubmit = (e) => {
      e.preventDefault();
      let data = {_id:"",answer:""};
      data._id = e.target.getAttribute("data-id");
      data.answer = e.target.getAttribute("data-choice");
      setAnswers(oldData => [...oldData, {...data}])
      e.target.classList.add("end");
      if (totalQuestions === totalSubmited ) {
        dispatch(setIsEnd(true));
      } 
      console.log (answers); 
  }


  useEffect(() => {
    return () => {
      dispatch(defaultTotalSubmited());
    }
  },[])
 
  useEffect(() => {
    if (isEnd) {
      quizRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  },[isEnd])

  useEffect(() => {
    setAnswers([]);
  },[currentQuiz])

  const handleBtnClick = (e) => {
    dispatch(inCreaseTotalSubmited());
    e.target.classList.add('stop-click')
  }


  return (
    <div className='quiz'>

             {currentQuiz.myQuestions && currentQuiz.myQuestions.map((question) =><form onSubmit={(e) => handelSubmit(e)}  key={question._id}
              className='quizContainer pt-3'
              data-id = {question._id}
               data-choice={""}
              >
                <p>
                  {question.body}
                </p>

                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                        data-val = {'choice_a'}
                        onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.choice_a}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'choice_b'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.choice_b}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'choice_c'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.choice_c}</label>
                </div>
                <div className='element-container'>
                  <div className='check-conatiner'>
                      <input
                      data-val = {'choice_d'}
                       onChange={(e) =>handleChange(e)}
                        type='radio'
                        name='ansQuiz'
                      />
                  </div>
                  <label>{question.choice_d}</label>
                </div>


                <button onClick={(e) => handleBtnClick(e)} className='success-button my-1 btn btn-success border-0'>{t("submit-btn")}</button>
              </form>

      )}
    {isEnd && <div ref={quizRef}>{<ShowResult answers={answers}/>}</div>}
    </div>
  );
};

export default Quiz;
