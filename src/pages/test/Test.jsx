import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoginNavbar from "../../components/general/lgoinNavbar/LoginNavbar";
import Sidebar from "../../components/general/sidebar/Sidebar";
import Wrapper from "../../components/general/Wrapper/Wrapper";
import Quiz from "../../components/quiz/Quiz";
import {getUQuizess} from '../../store/quizSlice';
import PageReload from "../../components/general/pageReload/PageReload";
import ShowResult from "../../components/general/showResult/ShowResult";
import { useLocation } from "react-router-dom";
import {setIsEnd, defaultTotalSubmited} from '../../store/showResultSlice';
import LessonsTopPart from "../../components/lessonsComponent/lessonsTopPart/LessonsTopPart";



const Test = () => {


    const dispatch = useDispatch();

    const params = useParams();
    const location = useLocation();
   
    const {isLoading} = useSelector(state => state.quiz);

    useEffect(() => {

        dispatch(getUQuizess(params.id))
        dispatch(setIsEnd(false));
        dispatch(defaultTotalSubmited());
        
    },[])


    return (
        <section
            style={{
                background: 'url("/imgs/settings/settingsBK.png") no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}
        >
            {isLoading ? <PageReload/> : <>
                <LoginNavbar />
                <Sidebar />
                <Wrapper>
                    <LessonsTopPart />
                    <Quiz />
                </Wrapper>
            </>}
        </section>
    )
}

export default Test;