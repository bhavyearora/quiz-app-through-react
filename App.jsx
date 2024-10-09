import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App=()=> {
  const [count, setCount] = useState(0)

    function calculateScore(e) {
      e.preventDefault();
      let score = 0;
      if (document.querySelector('input[name="q1"][value="Paris"]').checked) score++;
      if (document.querySelector('input[name="q2"][value="Jupiter"]').checked) score++;
      if (document.querySelector('input[name="q3"][value="Leonardo da Vinci"]').checked) score++;
      displayResult(score);
  }
  function displayResult(score) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "Your final score is " + score  + " out of 3";
}


  return (
  <>
  <div>
      <h1>Quiz</h1>
    <div class="quiz-container">
        <form id="quiz-form">
            <div class="question">
                <p>1:-What is the capital of France?</p>
                <input type="radio" name="q1" value="Berlin" /> Berlin
                <input type="radio" name="q1" value="Paris" /> Paris
                <input type="radio" name="q1" value="London" /> London
                <input type="radio" name="q1" value="Rome" /> Rome
            </div>
            <div class="question">
                <p>2:-What is the largest planet in our solar system?</p>
                <input type="radio" name="q2" value="Earth" /> Earth
                <input type="radio" name="q2" value="Saturn" /> Saturn
                <input type="radio" name="q2" value="Jupiter" /> Jupiter
                <input type="radio" name="q2" value="Uranus" /> Uranus
            </div>
            <div class="question">
                <p>3:-Who painted the Mona Lisa?</p>
                <input type="radio" name="q3" value="Leonardo da Vinci"/> Leonardo da Vinci
                <input type="radio" name="q3" value="Michelangelo"/> Michelangelo
                <input type="radio" name="q3" value="Raphael"/> Raphael
                <input type="radio" name="q3" value="Caravaggio"/> Caravaggio
            </div>
            <button id="submit-quiz" onClick={(e)=>(calculateScore(e))}>Submit Quiz</button>
        </form>
        <div class="result-container">
            <p id="result"></p>
        </div>
    </div>
    </div>
  
  </>
  
  )
};

export default App
