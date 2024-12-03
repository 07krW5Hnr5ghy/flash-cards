import { useState } from 'react'
import questionsData from './assets/questions.json'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlashCard from './components/FlashCard'
import ProgressBar from './components/ProgressBar'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(questionsData);
  return (
    <div className='app-wrapper'>
      <h1>Flash Cards</h1>
      <div className='flash-cards-wrapper'>
        <ProgressBar progress={currentQuestion+1} hundredPercent={questionsData.length}/>
        {<FlashCard {...questionsData[currentQuestion]} setQuestion={setCurrentQuestion} lastIndex={questionsData.length-1}/>}
      </div>
    </div>
  )
}

export default App
