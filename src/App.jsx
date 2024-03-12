import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const cardDictionary = [
  {
    "front": "What is the largest planet in our solar system?",
    "back": "Jupiter"
  },
  {
    "front": "How many planets are in our solar system?",
    "back": "Eight"
  },
  {
    "front": "What is the closest star to Earth?",
    "back": "Sun"
  },
  {
    "front": "What is the name of our galaxy?",
    "back": "Milky Way"
  },
  {
    "front": "What is the most abundant element in the universe?",
    "back": "Hydrogen"
  },
  {
    "front": "What is the process by which stars produce energy?",
    "back": "Nuclear fusion"
  },
  {
    "front": "What is the smallest planet in our solar system?",
    "back": "Mercury"
  },
  {
    "front": "What is the name of the force that holds planets in orbit?",
    "back": "Gravity"
  },
  {
    "front": "What is the term for a group of stars that form a recognizable pattern?",
    "back": "Constellation"
  },
  {
    "front": "What is the name of the planet known for its beautiful rings?",
    "back": "Saturn"
  },
  {
    "front": "What is the term for a massive explosion that marks the end of a star's life?",
    "back": "Supernova"
  },
  {
    "front": "What is the name of the asteroid belt located between Mars and Jupiter?",
    "back": "Main Belt"
  },
  {
    "front": "What is the term for the apparent change in position of a star due to Earth's orbit?",
    "back": "Parallax"
  },
  {
    "front": "What is the name of the largest moon of Saturn?",
    "back": "Titan"
  },
  {
    "front": "What is the term for a cloud of gas and dust where stars are born?",
    "back": "Nebula"
  }
]
function getRandomNumber(number = 2 ) {
  return Math.floor(Math.random() * number) + 1;
}

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const toggleCard = () => {
    setFlipped(!flipped);
  }

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * cardDictionary.length);
    setCurrentCard(randomIndex);
    setFlipped(false);
  };
 
  return (
    <>
    <h1>How well do you know the universe?</h1>
    <p>How much of the universe do you truly know of? Test your knowledge with this deck of cards</p>
    <p>Number of cards: {cardDictionary.length}</p>
    
    <Card flipped={flipped} front={cardDictionary[currentCard].front} 
    back={cardDictionary[currentCard].back} onClick={toggleCard}/>
    <button onClick={handleNextClick}>Next</button>
    
    </>
  )
}

export default App;
