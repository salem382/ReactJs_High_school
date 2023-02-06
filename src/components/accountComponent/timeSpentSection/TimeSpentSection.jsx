import { Container } from "react-bootstrap";
import Progress from "../Progress";
import { useTranslation } from "react-i18next";

const TimeSpentSection = () => {

    const {t} = useTranslation();


    return (
        <div className="mt-5">
        <Container>
            <div className="d-flex justify-content-between">
                <h5>{t("account-latest-Progress")}</h5>
                <p className="text-start b"
                style={{color:"#c2c2c2"}}
                >
                    {t("account-more")}</p>
            </div>
            <div className="d-flex  justify-content-between pt-4"
            style={{height:'200px'}}
            >
                <div className="d-flex flex-column align-items-center">
                    <p style={{color:"#c2c2c2"}}>Mon</p>
                    <Progress rotate="true" percent="17%" color="#2584E9" />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <p style={{color:"#c2c2c2"}}>Tue</p>
                    <Progress rotate="true" percent="55%" color="#F83D00" />
                </div>  
                <div className="d-flex flex-column align-items-center">
                    <p style={{color:"#c2c2c2"}}>Wed</p>
                    <Progress rotate="true" percent="20%" color="#05AF35" />
                </div>
                <div className="d-flex flex-column align-items-center">
                     <p style={{color:"#c2c2c2"}}>Thurs</p>
                    <Progress rotate="true" percent="30%" color="#0056E8" />
                </div>
                <div className="d-flex flex-column align-items-center">
                     <p style={{color:"#c2c2c2"}}>Fri</p>
                    <Progress rotate="true" percent="35%" color="#F83D00" />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <p style={{color:"#c2c2c2"}}>Sat</p>
                    <Progress rotate="true" percent="40%" color="#05AF35" />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <p style={{color:"#c2c2c2"}}>Sun</p>
                    <Progress rotate="true" percent="50%" color="#F83D00" />
                </div>
            </div>
        </Container>
        </div>
    )
}

export default TimeSpentSection;

// <Progress rotate="true" percent="17%" color="red" />