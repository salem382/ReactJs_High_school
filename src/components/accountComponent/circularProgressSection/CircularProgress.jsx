import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CircularProgress = ({color, percent, subjectName, registedNumber}) => {

    return (
        <section 
            className='d-flex rounded p-2 justify-content-between'
            style={{background:"#F0F7FF"}}
        >
            <div className='me-2'>
                <h6>{subjectName}</h6>
                <p className='fw-bold' 
                style={{fontSize:'11px',color:'#c1c1c1'}}
                >{registedNumber} Registed</p>
            </div>
            <div style={{ width: "70px", height: "70px" }}>
                <CircularProgressbar 
                        styles={buildStyles({
                            pathColor: `${color}`,
                            textColor: '#000',
                            trailColor: '#0056e83d'
                        })}
                        value={percent} text={`${percent}%`}
                />
            </div>
        </section>
    )
}

export default CircularProgress;