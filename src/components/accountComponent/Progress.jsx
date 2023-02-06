
const Progress = ({rotate, percent, color}) => {

    return (
        <div className="position-relative rounded"
            style={{height:rotate ? '100%' : '10px', background:'#0056e83d',
            width:rotate ? '10px' : '100%'
        }}
        >
            <div className="position-absolute start-0 bottom-0 rounded  "
               style={{
                width: rotate ? "100%" : percent,
                height : rotate ? percent : "100%",
                background:color
            }} 
            >
            </div>
        </div>
    )
}

export default Progress;
