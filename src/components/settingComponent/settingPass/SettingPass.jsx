import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import SettingControls from '../settingControls/SettingControls';
import './settingpass.scss';
import { Container } from "react-bootstrap";
import SettingSendData from "../settingSendData/SettingSendData";
import Wrapper from "../../wrapper/Wrapper";


const Settingpass = () => {

    return (
        <div className="ps-5 setting-pass">
            <Sidebar />
            <Navbar />
            <Wrapper>
                <SettingControls />
                <Container>
                    <form className="mt-5 ">
                        <div>
                            <input placeholder="Current Password" type="password"/>
                        </div>
                        <div>
                            <input placeholder="New Password" type="password"/>
                        </div>
                        <div>
                            <input placeholder="Verify Password" type="password"/>
                        </div>
                    </form>
                </Container>
                <SettingSendData />
            </Wrapper>
        </div>
    )
}
export default Settingpass;