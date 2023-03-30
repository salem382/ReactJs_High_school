import './subject.scss';



const Subject = ({subjectData}) => {



  const { name, teacherName, image } = subjectData;
  const SubjectImageUrl = "http://localhost:5000/";



  return (
    <div className='subject'>
      <img
        className='subject-img w-100'
        style={{height:"150px"}}
        src= {SubjectImageUrl + image}
        alt={name}
      />
      <div className='subject-info'>
        <div className='stuNums'>
          <img src='./imgs/subjects/studentsIcon.png' alt='' />
          <span>700</span>
          Students
        </div>
        <div className='time'>
          <img
            className='time__icon'
            src='./imgs/subjects/timeIcon.png'
            alt=''
          />
          <span className='time__num'>2h 20m</span>
        </div>
      </div>
      <h4 className='name'>{name}</h4>
      <div className=''>
          <p className='name mb-0 mt-2' style={{textTransform:'capitalize'}}>Teacher:{teacherName}</p>
      </div>
    </div>
  );
};

export default Subject;
