import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialSign from "../../components/general/socialsign/SocialSign";
import SignUpForm from "../../components/singupComponent/SignupForm";
import { useTranslation } from "react-i18next";
import SignTopPart from "../../components/general/signTopPart/SignTopPart";
import TransitionMenu from '../../components/general/transaltionMenu/TranslationMenu';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SignTopPart />
      <div className="signWapper">
        <h1> {t("sign-up-form-header")}</h1>
        {/* <SocialSign /> */}
        <SignUpForm />
        <div className="option">
          {t("sign-up-form-paragraph")}
          <span>
            <Link to="/login"> {t("sign-up-form-link")}</Link>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
