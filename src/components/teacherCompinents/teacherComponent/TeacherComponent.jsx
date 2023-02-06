import { Container } from "react-bootstrap";
import "./TeacherComponent.scss";
import { useTranslation } from "react-i18next";

const TeacherComponent = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="teachersCards">
        <div className="teacher">
          <img src="./imgs/teachers/teacherImg.png" alt="" />
          <h4 className="name">Mr. Hashem 222</h4>
          <p className="title">Biology teacher</p>
          <span className="school">middle School</span>
          <button className="action">{t("ourTeachers-card-button")}</button>
        </div>
        <div className="teacher">
          <img src="./imgs/teachers/teacherImg.png" alt="" />
          <h4 className="name">Mr. Hashem hany</h4>
          <p className="title">Biology teacher</p>
          <span className="school">middle School</span>
          <button className="action">{t("ourTeachers-card-button")}</button>
        </div>
        <div className="teacher">
          <img src="./imgs/teachers/teacherImg.png" alt="" />
          <h4 className="name">Mr. Hashem hany</h4>
          <p className="title">Biology teacher</p>
          <span className="school">middle School</span>
          <button className="action">{t("ourTeachers-card-button")}</button>
        </div>
        <div className="teacher">
          <img src="./imgs/teachers/teacherImg.png" alt="" />
          <h4 className="name">Mr. Hashem hany</h4>
          <p className="title">Biology teacher</p>
          <span className="school">middle School</span>
          <button className="action">{t("ourTeachers-card-button")}</button>
        </div>
        <div className="teacher">
          <img src="./imgs/teachers/teacherImg.png" alt="" />
          <h4 className="name">Mr. Hashem hany</h4>
          <p className="title">Biology teacher</p>
          <span className="school">middle School</span>
          <button className="action">{t("ourTeachers-card-button")}</button>
        </div>
        <div className="teacher">
          <img src="./imgs/teachers/teacherImg.png" alt="" />
          <h4 className="name">Mr. Hashem hany</h4>
          <p className="title">Biology teacher</p>
          <span className="school">middle School</span>
          <button className="action">{t("ourTeachers-card-button")}</button>
        </div>
      </div>
    </Container>
  );
};

export default TeacherComponent;
