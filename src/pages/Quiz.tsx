import React, { useState, useEffect } from 'react';
import NextButton from '../componants/quiz/NextButton';
import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '../api/quiz';
import QuizMainContents from '../componants/quiz/QuizMainContents';
import {
  StHillImg,
  StHillImgWrap,
  StNextButtonWrap,
  StQuizMain,
  StSection,
  StStarImg,
  StTitle,
} from '../style/quiz/MainStyle';
import QuizResult from '../componants/quiz/QuizResult';

interface IQuizs {
  id: string;
  img: string;
  answer: string;
  wrongAnswer: string[];
  hint: string;
}

const hillsImg: string[] = ['Hill1.svg', 'Hill2.svg', 'Hill3.svg', 'Hill4.svg'];
const starImg: string[] = ['Aquarius.svg', 'Aries.svg', 'Cancer.svg', 'Capricorn.svg'];

const Quiz = () => {
  const [number, setNumber] = useState<number>(-1);
  const { isLoading, isError, data } = useQuery<IQuizs[]>(['quiz'], getQuiz);
  const [quizs, setQuizs] = useState<IQuizs[]>([]);
  const [quizImg, setQuizImg] = useState<string>('');
  const [quizHint, setQuizHint] = useState<string>('');
  const [quizData, setQuizData] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  const clickNextBtnHandler = () => {
    if (number >= 0) {
      answers[number] = quizs[number]?.answer;
      setAnswers(answers);
    }

    setNumber(number + 1);
    if (number === 4) {
      let userScore = 0;
      answers.forEach((answer, i) => {
        if (answer === userAnswer[i]) {
          userScore = userScore + 1;
        }
        setScore(userScore);
      });
    }
  };
  useEffect(() => {
    const randomData = data?.sort(() => Math.random() - 0.5);
    if (typeof randomData !== 'undefined') {
      setQuizs(randomData);
    }
  }, [data]);

  useEffect(() => {
    if (number === -1) {
      return;
    }

    const temp1 = quizs[number]?.wrongAnswer ?? [];
    const temp2 = quizs[number]?.answer ?? '';

    // console.log([...quizs[number]?.wrongAnswer, quizs[number]?.answer]);

    setQuizImg(quizs[number]?.img);
    setQuizHint(quizs[number]?.hint);
    const quizAnswerRandom = [...temp1, temp2].sort(() => Math.random() - 0.5);
    setQuizData(quizAnswerRandom);
  }, [number]);

  if (isLoading) {
    return <p>로딩중입니다...</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다</p>;
  }
  return (
    <StSection>
      {number === -1 ? (
        <StQuizMain>
          <StTitle>
            <h2>⭐별자리 퀴즈⭐</h2>
            <p>" 나는 별자리를 얼마나 알고 있을까? "</p>
            <p>총 5문제 - 소요시간 약 5분</p>
          </StTitle>
          <StNextButtonWrap>
            <p>Start!!</p>
            <NextButton type="submit" onClick={clickNextBtnHandler} />
          </StNextButtonWrap>
          <div>
            {starImg.map((img, i) => {
              return <StStarImg key={img + i} src={`../images/quiz/${img}`} />;
            })}
          </div>
          <StHillImgWrap>
            {hillsImg.map((img, i) => {
              return <StHillImg key={img + i} src={`../images/quiz/${img}`} />;
            })}
          </StHillImgWrap>
        </StQuizMain>
      ) : number < 5 ? (
        <>
          {userAnswer[number] && (
            <StNextButtonWrap>
              <p>Next</p>
              <NextButton type="submit" onClick={clickNextBtnHandler} />
            </StNextButtonWrap>
          )}
          <QuizMainContents
            number={number}
            setNumber={setNumber}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            quizData={quizData}
            quizImg={quizImg}
            quizHint={quizHint}
          />
        </>
      ) : (
        <QuizResult score={score} />
      )}
    </StSection>
  );
};

export default Quiz;
