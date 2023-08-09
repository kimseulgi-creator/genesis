import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getQuiz } from '../api/quiz';
import { styled } from 'styled-components';
import quizBG from '../images/quiz_background2.png';
import NextButton from '../componants/quiz/NextButton';

interface IQuizs {
  id: string;
  img: string;
  answer: string;
  wrongAnswer: string[];
}

const hillsImg: string[] = ['Hill1.svg', 'Hill2.svg', 'Hill3.svg', 'Hill4.svg'];
const starImg: string[] = ['Aquarius.svg', 'Aries.svg', 'Cancer.svg', 'Capricorn.svg'];

const Quiz = () => {
  const { isLoading, isError, data } = useQuery<any>('quiz', getQuiz);
  const [number, setNumber] = useState<number>(-1);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [quizImg, setQuizImg] = useState<string>('');
  const [quizData, setQuizData] = useState<string[]>([]);
  const [quizs, setQuizs] = useState<IQuizs[]>([]);
  const [score, setScore] = useState<number>(0);

  const clickNextBtnHandler = () => {
    setNumber(number + 1);
    if (quizs[number]?.answer === userAnswer) {
      setScore(score + 1);
    }
    setUserAnswer('');
  };
  // const clickPrevBtnHandler = () => {
  //   setNumber(number - 1);
  // };

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    // console.log(quizs[number]?.answer);
    // console.log(userAnswer);
  };

  useEffect(() => {
    if (isLoading === true) {
      return;
    }
    setQuizs([...data].sort(() => Math.random() - 0.5));
  }, [data]);

  useEffect(() => {
    if (isLoading === true) {
      return;
    }
    setQuizImg(quizs[number]?.img);
    const quizAnswerRandom = [...quizs[number]?.wrongAnswer, quizs[number]?.answer].sort(() => Math.random() - 0.5);
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
          <div>
            {starImg.map((img, i) => {
              return <StStarImg key={img + i} src={`../images/${img}`} />;
            })}
          </div>
          <StHillImgWrap>
            {hillsImg.map((img, i) => {
              return <StHillImg key={img + i} src={`../images/${img}`} />;
            })}
          </StHillImgWrap>
          <StNextButtonWrap>
            <p>Start!!</p>
            <NextButton type="submit" onClick={clickNextBtnHandler} />
          </StNextButtonWrap>
        </StQuizMain>
      ) : number < 5 ? (
        <StQuizContents>
          <p>아래 별자리를 보고 알맞은 별자리의 이름을 클릭하세요</p>
          <p>{`문제 ${number + 1}`}/5</p>
          <StQuizWrap>
            <div>
              <img src={quizImg} />
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
              {/* <NextButton type="submit" onClick={clickPrevBtnHandler} /> */}
              {userAnswer !== '' && <NextButton type="submit" onClick={clickNextBtnHandler} />}
            </StForm>
          </StQuizWrap>
        </StQuizContents>
      ) : (
        <div>정답개수: {score}</div>
      )}
    </StSection>
  );
};

export default Quiz;
const StSection = styled.section`
  background: url(${quizBG});
  color: var(--color_white);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
const StQuizMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
const StTitle = styled.div`
  position: absolute;
  text-align: center;
  animation: slideinTop 2s forwards;

  @keyframes slideinTop {
    0% {
      opacity: 0%;
      top: -60px;
    }
    100% {
      opacity: 100%;
      top: 250px;
    }
  }
  & h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 60px;
  }
  & p {
    font-size: 24px;
    margin: 10px 0;
    text-align: center;
    &:nth-child(3) {
      font-size: 18px;
      margin-top: 20px;
    }
  }
`;
const StStarImg = styled.img`
  opacity: 0;
  position: absolute;
  animation-name: fadeInOut;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 2s;
  &:nth-child(1) {
    left: 160px;
    top: 180px;
    width: 200px;
    animation-delay: 2s;
  }
  &:nth-child(2) {
    left: 500px;
    top: 100px;
    width: 170px;
    animation-delay: 4s;
  }
  &:nth-child(3) {
    right: 570px;
    top: 70px;
    width: 170px;
    animation-delay: 3s;
  }
  &:nth-child(4) {
    right: 270px;
    top: 180px;
    width: 170px;
    animation-delay: 5s;
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;
const StHillImgWrap = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 100vh;
`;
const StHillImg = styled.img`
  width: 60%;
  position: absolute;
  bottom: 0px;

  &:nth-child(odd) {
    animation-name: slideinLeft;
    animation-duration: 2s;
  }
  &:nth-child(even) {
    right: 0px;
    animation-name: slideinRight;
    animation-duration: 2s;
  }
  &:nth-child(1) {
    width: 80%;
  }
  @keyframes slideinLeft {
    0% {
      left: -800px;
    }
    100% {
      left: 0px;
    }
  }
  @keyframes slideinRight {
    0% {
      right: -800px;
    }
    100% {
      right: 0px;
    }
  }
`;
const StNextButtonWrap = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translate(-50%, 0px);
  animation: moveBtn 1s forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes moveBtn {
    0% {
      right: 250px;
    }
    100% {
      right: 260px;
    }
  }
  &:hover {
    animation-play-state: paused;
  }
  & p {
    margin-bottom: 10px;
  }
`;

const StQuizContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 24px;
    &:nth-child(2) {
      margin-top: 20px;
      font-size: 18px;
    }
  }
`;

const StQuizWrap = styled.div`
  text-align: center;

  & img {
    width: 300px;
    height: 300px;
    margin: 80px;
  }
`;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  & div {
    & input {
      opacity: 0;
    }
    & input[type='radio']:checked + label {
      border-bottom: 3px solid var(--color_purple);
      padding-bottom: 5px;
    }

    & label {
      cursor: pointer;
      margin: 0px 30px;
      &:hover {
        border-bottom: 3px solid var(--color_purple);
        padding-bottom: 5px;
      }
    }
  }
`;
const StNextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 240px;
  transform: translate(-50%, 0px);
`;
