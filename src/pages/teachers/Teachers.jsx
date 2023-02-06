import TeacherSlide from '../../components/teacherCompinents/teacherSlide/TeacherSlide';
import TeacherSearch from '../../components/teacherCompinents/teacherSearch/teacherSearch';
import TeacherComponent from '../../components/teacherCompinents/teacherComponent/TeacherComponent';
import Footer from '../../components/general/footer/Footer';
import  Navbar  from '../../components/general/navbar/Navbar';

const Teachers = () => {
  return (
    <>
      <Navbar />
      <TeacherSlide />
      {/* <TeacherSearch /> */}
      <TeacherComponent />
      <Footer />
    </>
  );
};

export default Teachers;
