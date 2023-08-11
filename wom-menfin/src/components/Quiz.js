// import React, { useState } from "react";
// import { Quiz1 } from "./Quiz1.js";
// import "./Quiz.css";
// import Navbar from "./Navbar.js";
// import Footer from "./Footer.js";
// import Card1 from "./Cards1.js"
// const Quiz = () => {
//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState({
//     score: 0,
//     correctAnswers: 0,
//     wrongAnswers: 0,
//   });

//   const { questions } = Quiz1;
//   const { question, choices, correctAnswer } = questions[activeQuestion];

//   const onClickNext = () => {
//     setSelectedAnswerIndex(null);
//     const isCorrect = choices[selectedAnswerIndex] === correctAnswer;

//     setResult((prev) => ({
//       ...prev,
//       score: isCorrect ? prev.score + 1 : prev.score,
//       correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
//       wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
//     }));

//     if (activeQuestion !== questions.length - 1) {
//       setActiveQuestion((prev) => prev + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const onAnswerSelected = (answer, index) => {
//     if (selectedAnswerIndex !== null) {
//       return; // Do nothing if an answer has already been selected
//     }

//     setSelectedAnswerIndex(index);

//     // if (answer === correctAnswer) {
//     //   setResult((prev) => ({
//     //     ...prev,
//     //     score: prev.score + 1,
//     //     correctAnswers: prev.correctAnswers + 1,
//     //   }));
//     // }
//   };

//   const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

//   return (
//     <div>
//       <div className="pb-5"><Navbar /></div>
//       <div className="quiz-container pt-5">
//         {!showResult ? (
//           <div>
//             <div>
//               <span className="active-question-no">
//                 {addLeadingZero(activeQuestion + 1)}
//               </span>
//               <span className="total-question">
//                 /{addLeadingZero(questions.length)}
//               </span>
//             </div>
//             <h2>{question}</h2>
//             <ul>
//               {choices.map((answer, index) => (
//                 <li
//                   onClick={() => onAnswerSelected(answer, index)}
//                   key={answer}
//                   className={
//                     selectedAnswerIndex === index
//                       ? answer === correctAnswer
//                         ? "selected-correct-answer"
//                         : "selected-wrong-answer"
//                       : null
//                   }
//                 >
//                   {answer}
//                 </li>
//               ))}
//             </ul>
//             {selectedAnswerIndex !== null && (
//               <p className="correct-answer text-dark">
//                 Correct Answer: {correctAnswer}
//               </p>
//             )}
//             <div className="flex-right">
//               <button className="styled-primary-button btn-primary btn btn-primary"
//                 onClick={onClickNext}
//                 disabled={selectedAnswerIndex === null}
//               >
//                 {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center">
//             <div className="result">
//               <h3>Result</h3>
//               <p></p>
//               <p className="text-dark">
//                 Total Question: <span>{questions.length}</span>
//               </p>
//               <p className="text-dark">
//                 Total Score:<span> {result.score}</span>
//               </p>
//               <p className="text-dark">
//                 Correct Answers:<span> {result.correctAnswers}</span>
//               </p>
//               <p className="text-dark">
//                 Wrong Answers:<span> {result.wrongAnswers}</span>
//               </p>
//             </div>
//             <Card1 />
//           </div>
//         )}
//       </div>
//       <div className="pt-5"><Footer /></div>
//     </div>
//   );
// };

// export default Quiz;


import React, { useState } from "react";
import { Quiz1 } from "./Quiz1.js";
import "./Quiz.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Card1 from "./Cards1.js"
const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = Quiz1;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    const isCorrect = choices[selectedAnswerIndex] === correctAnswer;

    setResult((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
    }));

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    if (selectedAnswerIndex !== null) {
      return; // Do nothing if an answer has already been selected
    }

    setSelectedAnswerIndex(index);

    // if (answer === correctAnswer) {
    //   setResult((prev) => ({
    //     ...prev,
    //     score: prev.score + 1,
    //     correctAnswers: prev.correctAnswers + 1,
    //   }));
    // }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const resetQuiz = () => {
    setShowResult(false);
    setActiveQuestion(0); // Reset to the first question
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    }); // Reset result
    setSelectedAnswerIndex(null); // Reset selected answer
  };

  return (
    <div>
      <div className="pb-5"><Navbar /></div>
      <div className="quiz-container pt-5">
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index
                      ? answer === correctAnswer
                        ? "selected-correct-answer"
                        : "selected-wrong-answer"
                      : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            {selectedAnswerIndex !== null && (
              <p className="correct-answer text-dark">
                Correct Answer: {correctAnswer}
              </p>
            )}
            <div className="flex-right">
              <button className="styled-primary-button btn-primary btn btn-primary"
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="result">
              <h3>Result</h3>
              <p></p>
              <p className="text-dark">
                Total Question: <span>{questions.length}</span>
              </p>
              <p className="text-dark">
                Total Score:<span> {result.score}</span>
              </p>
              <p className="text-dark">
                Correct Answers:<span> {result.correctAnswers}</span>
              </p>
              <p className="text-dark">
                Wrong Answers:<span> {result.wrongAnswers}</span>
              </p>
              <button
                className="styled-primary-button btn-primary btn btn-primary"
                onClick={resetQuiz}
              >
                Retry Quiz
              </button>
            </div>
            <Card1 />
          </div>
        )}
      </div>
      <div className="pt-5"><Footer /></div>
    </div>
  );
};

export default Quiz;