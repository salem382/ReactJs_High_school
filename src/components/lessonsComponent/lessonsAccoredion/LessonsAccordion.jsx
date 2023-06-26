import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import './lessonsAccordion.css';
import {setCurrentLessons, setCurrentVideo} from '../../../store/unitsSlice';



function LessonsAccordion() {


  const dispatch = useDispatch()

  const {units, activeVideoIndex, currentUnit}= useSelector (state => state.units)

  const handleLessonClick = (e) => {

      dispatch(setCurrentLessons(e.target.className));
      dispatch(setCurrentVideo(e.target.id));
  }


  console.log (units);

  return (
    <div className='accordion-section'>
     <Accordion defaultActiveKey="0" flush>

      {units.map((unit, Unitsindx) => <Accordion.Item eventKey={Unitsindx} key={Unitsindx}>
        <Accordion.Header> {unit.name}</Accordion.Header>
        <Accordion.Body>
          <ul className='list-unstyled p-0 ul-item'>
            {unit.myLessons.map((lesson, lessonsIndx) =><li onClick={(e) => handleLessonClick(e)} 
              style={activeVideoIndex == lessonsIndx && currentUnit ==  unit.name ? {color:"#00c8d5"} : {}}
              key={lesson._id} className={Unitsindx} id={lessonsIndx}>{lesson.name}</li>)}
          </ul>
        </Accordion.Body>
      </Accordion.Item>)}
    </Accordion> 
    </div>
  );
}

export default LessonsAccordion;