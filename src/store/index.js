import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebarRouteSlice";
import menu from "./openMenuSlice";
import currentLang from "./currentLangSlice";
import currentUser from './currentUser';
import units from "./unitsSlice";
import currentSubject from "./currentSubjectSlice";
import quiz from './quizSlice';
import End from './showResultSlice'


export default  configureStore({
    reducer:{
        sidebar,
        menu,
        currentLang,
        currentUser,
        quiz,
        units,
        currentSubject,
        End
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
});
