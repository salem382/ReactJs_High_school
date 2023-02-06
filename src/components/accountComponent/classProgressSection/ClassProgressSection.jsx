import ClassProgress from "./classProgress/ClassProgress";
import { useTranslation } from "react-i18next";

const ClassProgressSection = () => {

    const {t} = useTranslation();

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-between"
            style={{width:"95%"}}
            >
                <h5 className="ps-3">{t("account-latest-Progress")}</h5>
                <p className="text-start b"
                style={{color:"#c2c2c2"}}
                >
                    {t("account-more")}</p>
            </div>
             <ClassProgress percent = "18%" topicName="Html" color="#2584E9"/>
             <ClassProgress percent = "20%" topicName="css" color="#F83D00"/>
             <ClassProgress percent = "15%" topicName="javascript" color="#2584E9"/>
             <ClassProgress percent = "30%" topicName="React" color="#F83D00"/> 
             <ClassProgress percent = "30%" topicName="React" color="#2584E9"/> 
        </div>
    )
}

export default ClassProgressSection;