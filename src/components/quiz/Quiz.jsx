import './quiz.scss';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';


const Quiz = () => {


  const {t} = useTranslation();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleChange = (x) => {
    x(true);
    if (setOpen1 != x) setOpen1(false);
    if (setOpen2 != x) setOpen2(false);
    if (setOpen3 != x) setOpen3(false);
    if (setOpen4 != x) setOpen4(false);
  };

  return (
    <div className='quiz'>
      <h3>Quiz Question 1</h3>
      <p>
        Which of these questions could you ask stakeholders during the early
        stages of a product?
        <br />
      </p>
      <form>
        <div className='element-container'>
          <div className='check-conatiner'>
            <span className='bd'></span>
            <input
              onChange={() => handleChange(setOpen1)}
              type='radio'
              name='ansQuiz'
            />
            <span
              style={{ display: open1 ? 'block' : 'none' }}
              className='bg'
            ></span>
          </div>
          <label>What kind of UX research have we done?</label>
        </div>
        <div className='element-container'>
          <div className='check-conatiner'>
            <span className='bd'></span>
            <input
              onChange={() => handleChange(setOpen2)}
              type='radio'
              name='ansQuiz'
            />
            <span
              style={{ display: open2 ? 'block' : 'none' }}
              className='bg'
            ></span>
          </div>
          <label>What kind of UX research have we done?</label>
        </div>
        <div className='element-container'>
          <div className='check-conatiner'>
            <span className='bd'></span>
            <input
              onChange={() => handleChange(setOpen3)}
              type='radio'
              name='ansQuiz'
            />
            <span
              style={{ display: open3 ? 'block' : 'none' }}
              className='bg'
            ></span>
          </div>
          <label>What kind of UX research have we done?</label>
        </div>
        <div className='element-container'>
          <div className='check-conatiner'>
            <span className='bd'></span>
            <input
              onChange={() => handleChange(setOpen4)}
              type='radio'
              name='ansQuiz'
            />
            <span
              style={{ display: open4 ? 'block' : 'none' }}
              className='bg'
            ></span>
          </div>
          <label>What kind of UX research have we done?</label>
        </div>
        <button className='success-button'>{t("submit-btn")}</button>
      </form>
    </div>
  );
};

export default Quiz;
