import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const information = {
  0: {"front":"front info", "back":"back-info"},
  1: {"front":"front info more", "back":"back-info-more"}
}

function getRandomNumber(number = 2 ) {
  return Math.floor(Math.random() * number) + 1;
}

function App() {
  const [front, setFront] = useState(false);
  const [number, setRandomNumber] = useState(0);
  const toggleCard = () => {
    setFront(front != front);
  }
  const setNumber = () => {
    setRandomNumber(number = getRandomNumber())
  }

  return (
    <>
    <h1>How well do you know the universe?</h1>
    <p>How much of the universe do you truly know of? Test your knowledge with this deck of cards</p>
    <p>Number of cards: 10</p>
    <Card isFrontFacing = {front} number={number} front={information[number]["front"]} back={information[number]["back"]}/>
    <button onClick={setNumber}>Next</button>
    
    </>
  )
}

export default App;
