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

  
  const getAllTeachers = async () => {

    const token = localStorage.getItem("heighNewbrainsToken");

    try {
        const {data} = await axios.get ("https://newbrainshigh.com/api/auth/getAllTeachers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTeachers([...data.teachers]);
        console.log (data.teachers);
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
     {teachers.length > 0 ?(
      <>
      <Navbar />
      <TeacherSlide />
      {/* <TeacherSearch /> */}
      <TeacherComponent teachers = {teachers}/>
      <Footer />
    </>
     ) :<PageReload />}
    </>
  );
};

export default Teachers;
