import { useState } from 'react'
import questionsData from './assets/questions.json'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlashCard from './components/FlashCard'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(questionsData);
  return (
    <>
      <h1>Flash Cards</h1>
      <div>
        {<FlashCard {...questionsData[currentQuestion]} setQuestion={setCurrentQuestion} lastIndex={questionsData.length-1}/>}
      </div>
    </>
  )
}

export default App
