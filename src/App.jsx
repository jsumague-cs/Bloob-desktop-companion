import {useState} from 'react';
import './App.css';

import idleImg from './assets/sprite-idle.png';
import reactionImg from './assets/sprite-reaction.png';


export default function App() {

    const initialGreeting = "Let us finish many tasks together!"

    const clickPhrases = [
      "Looking forward to our journey",
      "Do not forget to take a break once in a while...",
      "Always take care of yourself, okay?",
      "CHECK ME OUUT",
      "I love my gorgeous gorgeous gf"
    ];

  const [bubbleText, setBubbleText] = useState(initialGreeting)
  const [animState, setAnimState] = useState("idle"); 
 
  
  const handleClick = () => {
    if (animState === "reaction") {
      return; 
    }

    setAnimState("reaction");
    const randomPhrase = clickPhrases[Math.floor(Math.random() * clickPhrases.length)];
    setBubbleText(randomPhrase);

    
    setTimeout(() => {
      setAnimState("idle");
      setBubbleText("Chilling here now... 💤");
    }, 3000); 
  };

  return (
    <div className="game-container">
      <div 
        className="sprite-wrapper"
        onClick={handleClick}
      >
        <div className="speech-bubble">
          {bubbleText}
        </div>

        <div 
          className={`sprite-character ${animState}`}
          style={{ backgroundImage: `url(${animState === 'idle' ? idleImg : reactionImg})` }}
        ></div>
      </div>
    </div>
  );
}
