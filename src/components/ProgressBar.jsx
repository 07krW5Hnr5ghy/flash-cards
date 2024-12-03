function ProgressBar({progress,hundredPercent}){
    return(
        <div className="progress-bar-wrapper">
            <div className="progress-wrapper">
                <div className="progress" style={{
                    width:String(((progress/hundredPercent)*100/84)*100)+"%"
                }}></div>
                <span>{(progress/hundredPercent)*100}%</span>
            </div>
            <div className="question-indicator">
                <span>{progress} of {hundredPercent}</span>
            </div>
        </div>
    );
}
export default ProgressBar;