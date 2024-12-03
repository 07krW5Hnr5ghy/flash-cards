import { useState } from "react";
function FlashCard({question,answer,setQuestion,lastIndex}){
    const [toggleAnswer,setToggleAnswer] = useState(false);
    return(
        <div className="flash-card">
            <div className="flash-card-content">
                <p>{toggleAnswer ? answer:question}</p>
            </div>
            <div className="flash-card-menu">
                <button onClick={() => setQuestion(prev => prev>0 ? prev-1 : prev)}>Previous</button>
                <button onClick={() => setToggleAnswer(!toggleAnswer)}>{toggleAnswer ? "Hide Answer" : "Show Answer"}</button>
                <button onClick={() => setQuestion(prev => prev<lastIndex?prev+1:prev)}>Next</button>
            </div>
        </div>
    );
}
export default FlashCard;