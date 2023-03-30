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
            <img src={"http://localhost:5000/"+ teacher.image} alt={teacher.name} 
              style={{height:"200px"}}
            />
            <div className="teacher-info">
              <h4 className='name'>Mr. {teacher.name}</h4>
              <span className='school'>subject :{teacher.subject}</span> <br/>
              <span className='school'> grade :{teacher. grade}</span>
            </div>
            {/* <button className="action">{t("ourTeachers-card-button")}</button> */}
          </div>)}
          </>
      
      </div>
    </Container>
  );
};

export default TeacherComponent;
