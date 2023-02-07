import LoginNavbar from '../../components/general/lgoinNavbar/LoginNavbar';
import Sidebar from '../../components/general/sidebar/Sidebar';
import Wrapper from '../../components/general/Wrapper/Wrapper';
import SettingControls from '../../components/settingComponent/settingControls/SettingControls';
import Settinginfo from '../../components/settingComponent/settingInfo/Settinginfo';


const Profile = () => {
  return (
    <section
      style={{
        background: 'url("/imgs/settings/settingsBK.png") no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <LoginNavbar />
      <Sidebar />
      <Wrapper>
        {/* <Settinginfo /> */}
      </Wrapper>
    </section>
  );
};

export default Profile;
