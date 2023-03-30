import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import './ActiveVideo.scss';



const ActiveVideo = () => {


  const {activeVideo} = useSelector(state => state.units);

 
  return (
    <>
      {activeVideo.video ?  <div className='active-video'>
      <ReactPlayer
        width='100%'
        height='50vh'
        controls = {true}
        playing = {false}
        url={`http://localhost:5000/${activeVideo.video}`}
      />
    </div> : "not found"}
    </>
     
  );
};

export default ActiveVideo;
