import { useSelector } from "react-redux";

const BtnReload = () => {

    const {lang} = useSelector(state => state.currentLang)

    return (
        <>
             <span className="spinner-border spinner-border-sm mx-3" role="status" aria-hidden="true"></span>
                {lang === "en" ? "Loading ... " :"تحميل ..." } 
        </>
    )
}
export default BtnReload;
