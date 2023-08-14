import React, { useState } from 'react';
import NextButton from './NextButton';
import Button from '../Button';
import {
  StForm,
  StHintButtonWrap,
  StHintContents,
  StHintWrap,
  StQuizContents,
  StQuizImgWrap,
  StQuizWrap,
} from '../../style/quiz/ContentsStyle';

interface QuizContentsProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  userAnswer: string[];
  setUserAnswer: React.Dispatch<React.SetStateAction<string[]>>;
  quizData: string[];
  quizImg: string;
  quizHint: string;
}

function QuizMainContents({
  number,
  setNumber,
  userAnswer,
  setUserAnswer,
  quizData,
  quizImg,
  quizHint,
}: QuizContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const clickPrevBtnHandler = () => {
    setNumber(number - 1);
  };

  // 배열[현재 number]에 유저가 선택한 라디오버튼 input 값 추가해주기
  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let userAnswerArr = [...userAnswer];
    userAnswerArr[number] = e.target.value;
    setUserAnswer(userAnswerArr);
  };

  // 모달창 열기 / 닫기 함수
  const modalOpenHandler = () => {
    setIsOpen(true);
  };
  const modalCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <StQuizContents>
      <p>아래 별자리를 보고 알맞은 별자리의 이름을 클릭하세요</p>
      <p>{`문제 ${number + 1}`}/5</p>
      <StQuizWrap>
        <StQuizImgWrap>
          {/* Hint Button*/}
          <StHintButtonWrap>
            <Button size="medium" onClick={modalOpenHandler}>
              Hint
            </Button>
          </StHintButtonWrap>
          <img src={quizImg} alt="별자리 이미지" />
        </StQuizImgWrap>
        {/* Hint Modal*/}
        {isOpen && (
          <StHintWrap>
            <StHintContents>
              <pre>{quizHint}</pre>
              <Button size="medium" onClick={modalCloseHandler}>
                닫기
              </Button>
            </StHintContents>
          </StHintWrap>
        )}
        {/* 퀴즈 5지선다 */}
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
