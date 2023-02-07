import { Container } from "react-bootstrap";
import "./TeacherComponent.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageReload from '../../general/pageReload/PageReload';



const TeacherComponent = () => {
  const { t } = useTranslation();

  const [teachers, setTeachers] = useState([]);

  const {lang} = useSelector(state => state.currentLang)

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
    <Container>
      <div className="teachersCards">
          <>
            {teachers.map((teacher) => <div key={teacher.id} className="teacher">
            <img src={"https://newbrainshigh.com/profileImages/teachers/"+ teacher.image} alt={teacher.name.en} 
              style={{height:"200px"}}
            />
            <h4 className="name">{lang === "en" ? teacher.name.en : teacher.name.ar}</h4>
            <p className="title my-1">Biology teacher</p>
            <span className="school">High School</span>
            {/* <button className="action">{t("ourTeachers-card-button")}</button> */}
          </div>)}
          </>
      
      </div>
    </Container>
  );
};

export default TeacherComponent;
