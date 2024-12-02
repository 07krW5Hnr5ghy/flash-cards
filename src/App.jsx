import { useState } from 'react'
import questionsData from './assets/questions.json'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlashCard from './components/FlashCard'

function App() {
  const [count, setCount] = useState(0);
  console.log(questionsData);
  return (
    <>
      <h1>Flash Cards</h1>
      <FlashCard/>
    </>
  )
}

export default App
