import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import cardDictionary from './facts.json'

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [input, setInput] = useState('');
  const [mySet] = useState(new Set());
  const [indices, setIndices] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  const toggleCard = () => {
    setFlipped(!flipped);
  }

  const handleNextClick = () => {
    setCurrIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % cardDictionary.length;
      setCurrentCard(newIndex);
      setFlipped(false);
      return newIndex;
  })
    setInput('');
  };

  const handleBackClick = () => {
    setCurrIndex((prevIndex => {
      const newIndex = prevIndex - 1;
      if (newIndex >= 0) {
        setCurrentCard(newIndex);
        setFlipped(false);
      }
      return newIndex;
    }))};

  const handleCheckAnswerClick = () => {
    const currAnswer = input;
    const correctAnswer = cardDictionary[currIndex].back;

    if (currAnswer !== correctAnswer) {
      alert('Not the correct answer.');
    } else {
      alert('Correct!')
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }
 
  return (
    <>
    <h1>Space Wizard Flip Card App</h1>
    <p>Are you a space wizard ready to take over the universe? Test your knowlege with this flipcard app!</p>
    <p>Number of cards: {cardDictionary.length}</p>
    
    <Card flipped={flipped} front={cardDictionary[currentCard].front} 
    back={cardDictionary[currentCard].back} onClick={toggleCard}/>
    <div className="answer-space" >
    <input
      type="text"
      name='answerInput'
      value={input}
      placeholder="Insert answer here..."
      onChange={handleChange}
      className = "textbox"
      />
    </div>
    <button onClick={handleBackClick}>Back</button>
    <button onClick={handleNextClick}>Next</button>
    <button onClick={handleCheckAnswerClick}>Check Answer</button>
    </>
  )
}

export default App;
