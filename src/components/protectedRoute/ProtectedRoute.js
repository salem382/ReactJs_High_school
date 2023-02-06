import { Navigate } from "react-router-dom"

 const ProtectedRoute = (props) => {

    if (localStorage.getItem('newbrainsToken') === null) {
        
        return <Navigate  to='/login'/>
    } else {
        return props.children;
    }
}

export default ProtectedRoute;