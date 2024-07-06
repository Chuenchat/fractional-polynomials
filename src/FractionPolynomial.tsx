import { useEffect, useState } from "react";
import { BlockMath } from "react-katex";

import "katex/dist/katex.min.css";
import "./App.css";
import { polynomialDegree1, polynomialDegree2 } from "./utils/createString";
import { Coefficient, GameState } from "./utils/type";

export const FractionPolynomial: React.FC<{
  score: number;
  setScore: (score: number) => void;
}> = ({ score, setScore }) => {
  const [s, setS] = useState<GameState | undefined>();
  // find 2 correct answers
  const [find, setFind] = useState<number>(0);
  const [selected, setSelected] = useState<number[]>([]);
  const nAnswers = 10;

  const generateQuestion = () => {
    const a1 = Math.floor(Math.random() * 10);
    const b1 = Math.floor(Math.random() * 10);
    const a2 = Math.floor(Math.random() * 10);
    const b2 = Math.floor(Math.random() * 10);

    const question: [Coefficient, Coefficient] = [
      { a: a1, b: b1, correct: true },
      { a: a2, b: b2, correct: true },
    ];

    let answer: Coefficient[] = [];
    answer.push(...question);
    for (let i = 0; i < nAnswers - 2; i++) {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      // check if the answer is already in the list
      if (!answer.some((ans) => ans.a === a && ans.b === b)) {
        answer.push({ a, b, correct: false });
      } else {
        i--;
      }
    }
    answer = answer.sort(() => Math.random() - 0.5);

    setS({ question, answer });
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <>
      <div>
        {s && (
          <div className="flex flex-col gap-5 items-center">
            <div>
              <div style={{ fontSize: 25, padding: 10, borderRadius: 15 }}>
                <BlockMath>{polynomialDegree2(s.question)}</BlockMath>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
              {s.answer.map((ans, i) => {
                const isSelected = selected.includes(i);
                const isCorrect = ans.correct;
                return (
                  <button
                    key={i}
                    className={`${
                      isSelected
                        ? ans.correct
                          ? "bg-green-200"
                          : "bg-red-200"
                        : "bg-gray-100"
                    } p-5 rounded-lg w-48`}
                    onClick={() => {
                      if (!isSelected) {
                        setSelected([...selected, i]);
                        if (isCorrect) {
                          setScore(score + 1);
                          setFind(find + 1);
                        } else {
                          setScore(score - 1);
                        }
                      }
                    }}
                  >
                    <BlockMath>{polynomialDegree1(ans)}</BlockMath>
                  </button>
                );
              })}
            </div>
            <div className="flex flex-row gap-3 pt-16">
              <button
                className={`px-4 py-2 rounded-full ${
                  find < 2 ? "bg-gray-300" : "bg-green-500"
                } text-white`}
                onClick={() => {
                  setSelected([]);
                  generateQuestion();
                  setFind(0);
                }}
                disabled={find < 2}
              >
                ข้อถัดไป
              </button>
              <button
                className="px-4 py-2 rounded-full bg-pink-500 text-white"
                onClick={() => {
                  setSelected([]);
                  generateQuestion();
                  setScore(0);
                  setFind(0);
                }}
              >
                เปลี่ยนข้อ (คะแนนจะหาย)
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
