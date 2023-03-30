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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  
     
  const getAllTeachers = async () => {
    setIsLoading(true);
    setIsError(false);

    try {  
        const {data} = await axios.get("http://localhost:5000/teacher");
        setTeachers([...data.teachers]);
    }
    catch (error) {
    console.log (error)
    setIsError(true);
    console.log (error)
    }
    setIsLoading(false);

    }

  useEffect (() => {

    getAllTeachers ();
  }, [])


  return (
    <>
      <Navbar />
        <TeacherSlide />
        {isLoading ? <PageReload /> :isError?
         <div className='text-danger fs-5 fw-bold my-4'>Error occurred while fetching data</div> 
         :teachers.length === 0 ?<div className=' fs-5 fw-bold my-4'>No teachers found</div> :  <TeacherComponent teachers = {teachers}/>}
      <Footer />
    </>
     
  );
};

export default Teachers;
