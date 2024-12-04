import { useState } from "react";
function FlashCard({question,answer,setQuestion,lastIndex}){
    const [toggleAnswer,setToggleAnswer] = useState(false);
    function previousQuestion(){
        setQuestion(prev => prev>0 ? prev-1 : prev);
        setToggleAnswer(false);
    }
    function nextQuestion(){
        setQuestion(prev => prev<lastIndex?prev+1:prev);
        setToggleAnswer(false);
    }
    return(
        <div className="flash-card">
            <div className="flash-card-content">
                <p>{toggleAnswer ? answer:question}</p>
            </div>
            <div className="flash-card-menu">
                <button className="button button-arrow" onClick={previousQuestion}>{"< Previous"}</button>
                <button className="button main-button" onClick={() => setToggleAnswer(!toggleAnswer)}>{toggleAnswer ? "Hide Answer" : "Show Answer"}</button>
                <button className="button button-arrow" onClick={nextQuestion}>{"Next >"}</button>
            </div>
        </div>
    );
}
export default FlashCard;