import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from './component/start'
import Timer from "./component/timer";
import Trivia from "./component/trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timestop, setStop] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following command is used to create react app?",
      answers: [
        {
          text: "npx create-react-app",
          correct: false,
        },
        {
          text: "npm i npx create-react-app",
          correct: false,
        },
        {
          text: "npx i create-react-app",
          correct: true,
        },
        {
          text: "i _i creat-app",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following is used to create class for inheritance?",
      answers: [
        {
          text: "create",
          correct: false,
        },
        {
          text: "Extends",
          correct: true,
        },
        {
          text: "inherits",
          correct: false,
        },
        {
          text: "Delete",
          correct: false,
        }
      ]
    },
    {
      id: 6,
      question: "Which is the Default port number in the run application?",
      answers: [
        {
          text: "3000",
          correct: true,
        },
        {
          text: "2000",
          correct: false,
        },
        {
          text: "4006",
          correct: false,
        },
        {
          text: "8000",
          correct: false,
        }
      ]
    },
    {
      id: 7,
      question: "Which is the following is must for the API in React Js?",
      answers: [
        {
          text: "Setinitailcomponent",
          correct: false,
        },
        {
          text: "rendercomponent",
          correct: true,
        },
        {
          text: "render",
          correct: false,
        },
        {
          text: "all of the above",
          correct: false,
        }
      ]
      },
      
    {
      id: 8,
      question: "Which of the following is true regarding Babel",
      answers: [
        {
          text: "compiler",
          correct: false,
        },
        {
          text: "Transpilar",
          correct: false,
        },
        {
          text: "Both of the above",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        }
      ]
    },

    {
      id: 9,
      question: "What is the definition of React.Js ?",
      answers: [
        {
          text: "A Library for building interaction inferfaces",
          correct: true,
        },
        {
          text: "server-side Framework",
          correct: false,
        },
        {
          text: "none of these",
          correct: false,
        },
        {
          text: "User-interface framework",
          correct: false,
        }
      ]
    }
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
       questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber-1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timestop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;