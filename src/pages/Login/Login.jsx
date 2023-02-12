import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialSign from "../../components/general/socialsign/SocialSign";
import LoginForm from "../../components/LoginComponent/LoginForm";
import { useTranslation } from "react-i18next";
import SignTopPart from '../../components/general/signTopPart/SignTopPart';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SignTopPart />
      <div className="signWapper">
        <h1> {t("log-in-form-header")}</h1>
        {/* <SocialSign /> */}
        <LoginForm />
        <div className="option">
          {t("log-in-form-paragraph")}
          <span>
            <Link to="/signup"> {t("log-in-form-link")}</Link>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Login;
