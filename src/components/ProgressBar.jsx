function ProgressBar({progress,hundredPercent}){
    return(
        <div>
            <span>{(progress/hundredPercent)*100}%</span>
            <span>{progress} of {hundredPercent}</span>
        </div>
    );
}
export default ProgressBar;