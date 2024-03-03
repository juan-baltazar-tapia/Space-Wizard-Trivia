import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [front, setFront] = useState(false);
  const toggleCard = () => {
    setFront(front != front);
  }

  return (
    <>
    <h1>How well do you know the universe?</h1>
    <p>How much of the universe do you truly know of? Test your knowledge with this deck of cards</p>
    <p>Number of cards: 10</p>
    <Card />
    <button>Next</button>
    
   
    </>
  )
}

export default App
