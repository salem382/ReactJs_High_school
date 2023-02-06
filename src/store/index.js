import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebarRouteSlice";
import menu from "./openMenuSlice";
import currentLang from "./currentLangSlice";
import currentUser from './currentUser';
import units from "./unitsSlice";
import currentSubject from "./currentSubjectSlice";


export default  configureStore({
    reducer:{
        sidebar,
        menu,
        currentLang,
        currentUser,
        units,
        currentSubject
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
});
