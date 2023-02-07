import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
    

    const {user} = useSelector(state => state.currentUser);
    return (
        <div className="d-flex m-auto mt-4 bg-blue-light personal-info p-2 align-items-center"
                style={{width:"90%", borderRadius:"20px"}}  
            >
                <Link to='/subjects'>
                    <img src={user.image ? "https://newbrainshigh.com/profileImages/users/" + user.image:"/imgs/navbar/user.webp"} alt="user"
                    className="rounded-circle"
                    style={{width:"50px", height:"50px"}}
                    />
                </Link>
                <div className="mx-2">
                <h6>{user.name}</h6>
                <p style={{fontSize:"13px"}} className="text-gray">{user.email}</p>
                </div>
        </div>
    )
}

export default PersonalInfo;