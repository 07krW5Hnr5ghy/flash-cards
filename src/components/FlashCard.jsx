import { useState } from "react";

const [toggleAnswer,setToggleAnswer] = useState(false);

function FlashCard({question,answer}){
    return(
        <div>
            <div>
                <p>{toggleAnswer ? answer:question}</p>
            </div>
            <div>
                <button>Previous</button>
                <button onClick={setToggleAnswer(!toggleAnswer)}>{toggleAnswer ? "Hide Answer" : "Show Answer"}</button>
                <button>Next</button>
            </div>
        </div>
    );
}
export default FlashCard;