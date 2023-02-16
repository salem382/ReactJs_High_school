import TeacherSlide from '../../components/teacherCompinents/teacherSlide/TeacherSlide';
import TeacherSearch from '../../components/teacherCompinents/teacherSearch/teacherSearch';
import TeacherComponent from '../../components/teacherCompinents/teacherComponent/TeacherComponent';
import Footer from '../../components/general/footer/Footer';
import  Navbar  from '../../components/general/navbar/Navbar';
import axios from "axios";
import { useEffect, useState } from "react";
import PageReload from '../../components/general/pageReload/PageReload';




const Teachers = () => {

  const [teachers, setTeachers] = useState([]);
  const [isOk, setIsOk] = useState(true);
  

  const getAllTeachers = async () => {

    try {
        const {data} = await axios.get ("https://newbrainshigh.com/api/getAllTeachers");
  
        if (data.result.length > 0) {
          setTeachers([...data.result]);
          setIsOk(true);
        }
        else {
          setIsOk(false);
        }
    }
    catch (error) {
      console.log (error);
    }

  }

  useEffect (() => {

    getAllTeachers ();
  }, [])





  return (
    <>
      <Navbar />
      <TeacherSlide />
     {teachers.length > 0 && isOk ?(
      <>
      <TeacherComponent teachers = {teachers}/>
     
    </>
     ) :!isOk && teachers.length === 0 ? (
      <div className='w-50 m-auto fs-3 fw-bold'>
          <p>No teacher Found !</p>
      </div>
    )
    : <>
      <PageReload />
    </>}
    <Footer />
    </>
     
  );
};

export default Teachers;
