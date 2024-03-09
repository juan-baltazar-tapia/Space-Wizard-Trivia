import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const cardDictionary = [
  {
    front: 'What is the Sun?',
    back: 'The Sun is the center of our solar system and is about 93 million miles (149.6 million kilometers) from Earth.'
  },
  {
    front: 'What is the Moon?',
    back: 'The Moon is Earth\'s only natural satellite and is about 238,900 miles (384,400 kilometers) away.'
  },
  {
    front: 'What is Mars?',
    back: 'Mars is known as the "Red Planet" due to its reddish appearance and is home to the largest volcano and canyon in the solar system.'
  },
  {
    front: 'What is Jupiter?',
    back: 'Jupiter is the largest planet in our solar system and has more than 75 moons.'
  },
  {
    front: 'What is Saturn?',
    back: 'Saturn is known for its prominent ring system and has 62 confirmed moons, with an additional 20 awaiting confirmation.'
  },
  {
    front: 'What is Uranus?',
    back: 'Uranus is an ice giant and is the only planet that rotates on its side, likely due to a collision with another celestial body.'
  },
  {
    front: 'What is Neptune?',
    back: 'Neptune is the windiest planet in our solar system, with wind speeds reaching up to 1,500 miles per hour (2,400 kilometers per hour).'
  },
  {
    front: 'What is Pluto?',
    back: 'Pluto was once considered the ninth planet but was reclassified as a dwarf planet in 2006 by the International Astronomical Union (IAU).'
  },
  {
    front: 'What are asteroids?',
    back: 'Asteroids are rocky objects that orbit the Sun, and the asteroid belt is located between Mars and Jupiter.'
  },
  {
    front: 'What are comets?',
    back: 'Comets are icy objects that release gas and dust as they approach the Sun, creating a visible atmosphere and tail.'
  }
];

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
