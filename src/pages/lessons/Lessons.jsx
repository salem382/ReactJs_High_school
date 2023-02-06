import LoginNavbar from '../../components/general/lgoinNavbar/LoginNavbar';
import Wrapper from '../../components/general/Wrapper/Wrapper';
import ActiveVideo from '../../components/lessonsComponent/ActiveVideo/ActiveVideo';
import Sidebar from '../../components/general/sidebar/Sidebar';
import VideoControls from '../../components/lessonsComponent/videoControls/VideoControls';
import './Lessons.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUnits} from '../../store/unitsSlice';
import PageReload from '../../components/general/pageReload/PageReload';
import LessonsTopPart from "../../components/lessonsComponent/lessonsTopPart/LessonsTopPart";


const Lessons = () => {


  const params = useParams();
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.units);

  useEffect (() => {

    dispatch(getUnits(params.id));

  },[])


  return (
    <section
      style={{
        background: 'url("/imgs/videos/videoBK.png") no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      {isLoading ? <PageReload /> : (
      <>
        <LoginNavbar />
        <Sidebar />
        <Wrapper>
          <LessonsTopPart/>
          <div className='video-wrapper'>
            <ActiveVideo />
            <VideoControls />
          </div>
        </Wrapper>
      </>
    )}
    </section>
  );
};

export default Lessons;
