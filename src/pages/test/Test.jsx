import LoginNavbar from "../../components/general/lgoinNavbar/LoginNavbar";
import Sidebar from "../../components/general/sidebar/Sidebar";
import Wrapper from "../../components/general/Wrapper/Wrapper";
import Quiz from "../../components/quiz/Quiz";

const Test = () => {

    return (
        <section>
            <LoginNavbar />
            <Sidebar />
            <Wrapper>
                <Quiz />
            </Wrapper>
        </section>
    )
}

export default Test;