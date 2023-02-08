import { Container } from "react-bootstrap";
import "./TeacherComponent.scss";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import PageReload from '../../general/pageReload/PageReload';



const TeacherComponent = ({teachers}) => {
  const { t } = useTranslation();

  

  const {lang} = useSelector(state => state.currentLang)


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
