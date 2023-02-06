import './VideoControls.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {nextBtn} from '../../../store/unitsSlice'
import { useDispatch, useSelector } from 'react-redux';

const VideoControls = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {noNext} = useSelector(state => state.units);
  
  return (
    <div className='video-controls'>
      {/* <div className='leason-header'>
        <h2 className='lesson-title'>Conditionals</h2>
        <div className='leason-rate'>
          <span>rate the leason</span>
        </div>
      </div> */}
      {/* <p className='leason-descrp'>
        The if clause tells you the condition (If you study hard) and the main
        clause tells you the result (you will pass your exams). The order of the
        clauses does not change the meaning. Conditional sentences are often
        divided into different types.
      </p> */}
      <div className='lesson-actions'>
        <div className='lesson-actions-group '>
          <button className='light-button  pdf'>
            {t('video-controls-pdf')}
          </button>
          <button className='primary-button  start'>
            {' '}
            <Link to="/test" className='nav-link'>
              {t('video-controls-start')}
            </Link>
          </button>
        </div>
        {/* pointer-events: none; */}
        {/* <button className='prev'>Previous</button> */}
        <button
        style={{pointerEvents:noNext &&"none", background:noNext && "#ccc" }}
        className='success-button next' onClick={() => dispatch(nextBtn())}>
          {' '}
          {t('video-controls-next')}
        </button>
      </div>
    </div>
  );
};

export default VideoControls;
