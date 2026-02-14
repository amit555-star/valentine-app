import { useState } from "react";
import "./App.css";

const questions = [
  {
    q: "Do you remember our month of memories? 😊",
    options: ["Yes ❤️", "Of course I do 💖"],
  },
  {
    q: "Did you know you are my favorite person in the whole world? 🌍",
    options: ["Yes 😌", "Now I know 💕"],
  },
  {
    q: "Who makes my bad days instantly better?",
    options: ["Me 😎", "Obviously me 😍"],
  },
  {
    q: "Who steals the blanket at night? 🛌",
    options: ["You 😆", "I do 😇"],
  },
  {
    q: "Am I lucky to have you? 🍀",
    options: ["Very lucky 😘", "The luckiest ❤️"],
  },
  {
    q: "Do you know how much I love you? 💕",
    options: ["A lot ❤️", "Infinity ♾️"],
  },
];

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="app">
      <FloatingHearts />

      {step < questions.length ? (
        <div className="card">
          <h2>{questions[step].q}</h2>

          {questions[step].options.map((opt, i) => (
            <button
              key={i}
              className="yes-btn"
              onClick={() => setStep(step + 1)}
            >
              {opt}
            </button>
          ))}

          <NoButton />
        </div>
      ) : (
        <FinalScreen />
      )}
    </div>
  );
}

/* Floating hearts */
function FloatingHearts() {
  return (
    <div className="hearts">
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i}>💗</span>
      ))}
    </div>
  );
}

/* Playful NO button */
function NoButton() {
  const [pos, setPos] = useState({ top: "70%", left: "50%" });

  const move = () => {
    setPos({
      top: Math.random() * 80 + "%",
      left: Math.random() * 80 + "%",
    });
  };

  return (
    <button
      className="no-btn"
      style={{ top: pos.top, left: pos.left }}
      onMouseEnter={move}
      onClick={move}
    >
      No 🙈
    </button>
  );
}

/* Final screen */
function FinalScreen() {
  return (
    <div className="final">
      <div className="heart-blast">💖</div>

      <h1>
        No matter how many questions I ask,
        <br />
        the answer will always be <span>YOU ❤️</span>
      </h1>
      <br /><br />
      <p>
        Happy Valentine’s Day 💕
      </p>

      <Sparkles />
    </div>
  );
}

/* Sparkles */
function Sparkles() {
  return (
    <div className="sparkles">
      {Array.from({ length: 40 }).map((_, i) => {
        const style = {
          left: Math.random() * 100 + "vw",
          animationDelay: Math.random() * 5 + "s",
          animationDuration: 4 + Math.random() * 4 + "s",
          fontSize: 0.8 + Math.random() * 1.2 + "rem",
        };

        return (
          <span key={i} style={style}>
            ✨
          </span>
        );
      })}
    </div>
  );
}

