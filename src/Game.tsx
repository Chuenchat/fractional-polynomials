import { useState } from "react";
import { FractionPolynomial } from "./FractionPolynomial";

// กติกาของเกม
// 1. เลือกตัวประกอบสำหรับพหุนามดีกรี 2 ที่ถูกต้อง
// 2. ตอบถูก 1 ข้อได้ 1 คะแนน
// 3. ตอบผิด 1 ข้อ จะหัก 1 คะแนน
// 4. ตอบถูกทุกข้อ 2 ข้อ จะเป็นการเปลี่ยนข้อถัดไป

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
      <div className="rounded-xl p-5 mt-20 m-5 text-left bg-slate-100">
        <div className="font-bold">กติกาของเกม</div>
        <ol>
          <li>เลือกตัวประกอบสำหรับพหุนามดีกรี 2 ที่ถูกต้อง</li>
          <li>ตอบถูก 1 ข้อได้ 1 คะแนน</li>
          <li>ตอบผิด 1 ข้อ จะหัก 1 คะแนน</li>
          <li>ตอบถูกทุกข้อ 2 ข้อ จะเป็นการเปลี่ยนข้อถัดไป</li>
        </ol>
      </div>
    </div>
  );
}
