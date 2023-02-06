import CircularProgress from "./CircularProgress";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const CircularProgressSection = () => {

    const {t} = useTranslation();

    return (
        <section className="mt-5">
            <Container>
                <h5 className="mb-4">{t("account-class-progress")}</h5>
                <Row>
                    <Col md = {3} sm = {6} className="mb-4 mb-md-0">
                        <CircularProgress color="#F83D00" percent = "20" subjectName = "math" registedNumber = "10" />
                    </Col>
                    <Col md = {3} sm = {6} className="mb-4 mb-md-0">
                        <CircularProgress color="#2584E9" percent = "30" subjectName = "math" registedNumber = "50" />
                    </Col>
                    <Col md = {3} sm = {6} className="mb-4 mb-md-0">
                        <CircularProgress color="#05AF35" percent = "20" subjectName = "arabic" registedNumber = "70" />
                    </Col>
                    <Col md = {3} sm = {6} className="mb-4 mb-md-0">
                        <CircularProgress color="#F83D00" percent = "40" subjectName = "asgasg" registedNumber = "80" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CircularProgressSection;