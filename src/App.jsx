import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import cardDictionary from './facts.json'

const mySet = new Set();
const indices = []
let currIndex = -1

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * number) + 1;
  // This will guarantee a new random number each time
  while (mySet.has(randomNumber) && indices.length <= cardDictionary.length) {
    randomNumber = Math.floor(Math.random() * number) + 1;
  }
  return randomNumber
}

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const toggleCard = () => {
    setFlipped(!flipped);
  }

  const handleNextClick = () => {
    currIndex++;
    if (currIndex < indices.length) {
      setCurrentCard(currIndex);
      setFlipped(false);
    } else {
      const randomIndex = Math.floor(Math.random() * cardDictionary.length);
      indices.push(randomIndex)
      setCurrentCard(currIndex);
      setFlipped(false);
    }
  };

  // TODO: edge case, currIndex = -1
  const handleBackClick = () => {
    currIndex--;
    setCurrentCard(currIndex);
    setFlipped(false);
  }
 
  return (
    <>
    <h1>How well do you know the universe?</h1>
    <p>How much of the universe do you truly know of? Test your knowledge with this deck of cards</p>
    <p>Number of cards: {cardDictionary.length}</p>
    
    <Card flipped={flipped} front={cardDictionary[currentCard].front} 
    back={cardDictionary[currentCard].back} onClick={toggleCard}/>
    <button onClick={handleBackClick}>Back</button>
    <button onClick={handleNextClick}>Next</button>
    
    </>
  )
}

export default App;
