import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import './ActiveVideo.scss';



const ActiveVideo = () => {


  const {activeVideo, isLoading} = useSelector(state => state.units);

 
  return (
    <>
      {activeVideo.video ?  <div className='active-video'>
      <ReactPlayer
        width='100%'
        height='50vh'
        controls = {true}
        playing = {false}
        url={`https://newbrainshigh.com/lessons/videos/${activeVideo.video}`}
      />
    </div> : "loading..."}
    </>
     
  );
};

export default ActiveVideo;
