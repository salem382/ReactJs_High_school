import { useSelector } from 'react-redux';



const Wrapper = ({children}) => {

    const { openSidebar, sidebarWidth, screeSize } = useSelector(
        (state) => state.sidebar
      );
      const { lang } = useSelector(
        (state) => state.currentLang
      );
    return (
        <div  style={
          lang === "en" ? {paddingLeft: openSidebar && screeSize > 992 ? sidebarWidth : '0', transition: 'all .3s ease-in-out'} :
           {paddingRight: openSidebar && screeSize > 992  ? sidebarWidth : '0', transition: 'all .3s ease-in-out'}
          }>

            {children}
            
        </div>
    )
}

export default Wrapper;

