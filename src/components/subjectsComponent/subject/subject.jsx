import './subject.scss';



const Subject = ({subjectData}) => {



  const { name, teacher_name, teacher_image, teacher_id, id, image } = subjectData;
  const teacherImageUrl = "https://newbrains-edu.com/profileImages/teachers/";
  const SubjectImageUrl = "https://newbrains-edu.com/subjects/";



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
      <div className='teacher-info'>
      <img src={teacherImageUrl + teacher_image} alt={teacher_image}
        style={{width:"50px", height:"50px"}}
        className="rounded-circle"
      />
            <p>Mr. {teacher_name}</p>
      </div>
    </div>
  );
};

export default Subject;
