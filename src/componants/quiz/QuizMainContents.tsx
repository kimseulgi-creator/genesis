import React, { useState } from 'react';
import NextButton from './NextButton';
import { StForm, StQuizContents, StQuizWrap } from '../../style/quiz/ContentsStyle';

interface QuizContentsProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  userAnswer: string[];
  setUserAnswer: React.Dispatch<React.SetStateAction<string[]>>;
  quizData: string[];
  quizImg: string;
}

function QuizMainContents({ number, setNumber, userAnswer, setUserAnswer, quizData, quizImg }: QuizContentsProps) {
  const clickPrevBtnHandler = () => {
    setNumber(number - 1);
  };
  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let userAnswerArr = [...userAnswer];
    userAnswerArr[number] = e.target.value;
    setUserAnswer(userAnswerArr);
  };

  return (
    <StQuizContents>
      <p>아래 별자리를 보고 알맞은 별자리의 이름을 클릭하세요</p>
      <p>{`문제 ${number + 1}`}/5</p>
      <StQuizWrap>
        <div>
          <img src={quizImg} alt="별자리 이미지" />
          {/* {isImageLoaded ? <p>Image loaded successfully!</p> : <p>Image is still loading...</p>} */}
        </div>
        <StForm
          onSubmit={e => {
            e.preventDefault();
          }}>
          {quizData?.map((item, i) => {
            return (
              <div key={item + i}>
                <input type="radio" id={item} name="checkAnswer" value={item} onChange={inputOnChangeHandler} />
                <label htmlFor={item}>
                  {i + 1 + '. '}
                  {item}
                </label>
              </div>
            );
          })}
          <NextButton className="prevBtn" type="submit" onClick={clickPrevBtnHandler} />
        </StForm>
      </StQuizWrap>
    </StQuizContents>
  );
}

export default QuizMainContents;
