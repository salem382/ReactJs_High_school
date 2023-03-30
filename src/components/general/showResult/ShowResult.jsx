import { useSelector } from 'react-redux';
import './showResult.scss'
import axios from 'axios';
import { useEffect} from 'react';
import { useState } from 'react';


const ShowResult = ({answers}) => {


    const {currentQuiz} = useSelector(state => state.quiz);
    const [result, setResult] = useState({});

    const sendData = async() => {

        let sendingData = {
            assignment_id:currentQuiz._id,
            answers
        }

        try {
           const {data} = await axios.post(`http://localhost:5000/result`, sendingData,
           {
            headers: {
              token: `${localStorage.getItem("newbrainsToken")}`,
            },
          }
           
           );
           setResult({...data})
        }
        catch (error) {
            console.log (error);
        }
        
    }


    useEffect(() => {
        sendData();
    },[])


    return (

        <>
            
        <div className="main-container">
            <div className="check-container">
                <div className="check-background">
                    <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 25L27.3077 44L58.5 7" stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="check-shadow"></div>
            </div>
            <div className="text fs-4">your score is
            <span className='mx-1' style={{color:"#080"}}>{result.total_grade} / {result.student_grade}</span>
            </div>
        </div>  
    
        </>
    )
}

export default ShowResult;