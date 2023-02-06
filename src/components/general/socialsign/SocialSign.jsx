import "./SocialSign.scss";
import { useTranslation } from "react-i18next";
const SocialSign = () => {
  const { t } = useTranslation();
  return (
    <div className="socialSign">
      <button className="appleBtn">
        <img src="./imgs/authentication/appleIcon.png" alt="" />
        <span>{t("log-in-button-apple")}</span>
      </button>
      <button className="gmailBtn">
        <img src="./imgs/authentication/gmailIcon.png" alt="" />
        <span>{t("log-in-button-google")}</span>
      </button>
      <div className="orBar"> or </div>
    </div>
  );
};

export default SocialSign;
