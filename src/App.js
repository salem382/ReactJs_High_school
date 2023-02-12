import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lessons from './pages/lessons/Lessons';
import Login from './pages/Login/Login';
import Portfolio from './pages/portfolio/Portfolio';
import Profile from './pages/profile/Profile';
import Signup from './pages/signup/Signup';
import Subjects from './pages/subjects/Subjects';
import Teachers from './pages/teachers/Teachers';
import Test from './pages/test/Test';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setOpenSidebar, setScreenSize } from './store/sidebarRouteSlice';
import { setOpenMenu } from './store/openMenuSlice';
import Cookies from 'js-cookie';
import { setCurrentLang } from './store/currentLangSlice';
import { getUser } from './store/currentUser';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ReturnedPolicies from '../src/pages/returnedPolicies/ReturnedPolicies';
import PrivacyPolicies from './pages/provacyPolicies/PrivacyPolicies';
import CancilationPolicy from './pages/cancelationPolicy/CancilationPolicy';



function App() {
  /* get screen size */
  const dispatch = useDispatch();
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    screenSize.dynamicWidth <= 992
      ? dispatch(setOpenSidebar(false))
      : dispatch(setOpenSidebar(true));
    dispatch(setScreenSize(screenSize.dynamicWidth));
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
  /*******************************************************/

  const currentLang = Cookies.get('i18next') || 'en';
  useEffect(() => {
    document.getElementById('html').lang = currentLang;
    dispatch(setCurrentLang(currentLang));
    dispatch(getUser());
  }, []);


  

  return (
    <div className='App' onClick={() => dispatch(setOpenMenu(false))}>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lessons/:id' element={<ProtectedRoute><Lessons /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/portfolio' element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
          <Route path='/profile' element = {<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/subjects' element={<ProtectedRoute><Subjects /></ProtectedRoute>} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/test/:id' element={<ProtectedRoute><Test /></ProtectedRoute>} />
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path='/returnpolicies' element={<ReturnedPolicies />} />
          <Route path='/privacypolicies' element={<PrivacyPolicies />} />
          <Route path='/CancilationPolicy' element={<CancilationPolicy />} />
          <Route path='*' element={<div className='fs-1 text-center mt-5 text-danger'>Page Not Found 404!</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
