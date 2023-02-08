import './showResult.scss'

const ShowResult = ({totalGrad}) => {


    return (
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
            <span className='mx-1' style={{color:"#080"}}>{totalGrad}</span></div>
        </div>
    )
}

export default ShowResult;