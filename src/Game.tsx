import { useState } from "react";
import { FractionPolynomial } from "./FractionPolynomial";

export function Game() {
  const [score, setScore] = useState(0);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
        <h1 className="text-2xl">Polynomial Game</h1>
      </div>
      <div className="absolute top-0 right-0">
        <h1 className="text-2xl">Score: {score}</h1>
      </div>
      <FractionPolynomial score={score} setScore={setScore} />
    </div>
  );
}
