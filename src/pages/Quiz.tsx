import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getQuiz } from '../api/quiz';
import { styled } from 'styled-components';
import nextIcon from '../images/quizNextIcon.svg';

interface IQuizs {
  id: string;
  img: string;
  answer: string;
  wrongAnswer: string[];
}

const Quiz = () => {
  const { isLoading, isError, data } = useQuery<any>('quiz', getQuiz);
  const [number, setNumber] = useState<number>(-1);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [quizImg, setQuizImg] = useState<string>('');
  const [quizData, setQuizData] = useState<string[]>([]);
  const [quizs, setQuizs] = useState<IQuizs[]>([]);
  const [score, setScore] = useState<number>(0);

  // let quizs = data?.sort(() => Math.random() - 0.5);

  const clickNextBtnHandler = () => {
    // quizs[number - 1].answer === userAnswer ? setScore(score + 1) : null;
    setNumber(number + 1);
  };

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    console.log(quizs[number]?.answer);
    console.log(userAnswer);
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
    // console.log(quizAnswerRandom);
    setQuizData(quizAnswerRandom);
  }, [number]);

  // useEffect(() => {
  //   // if (isLoading === true) {
  //   //   return;
  //   // }
  //   console.log(data);
  //   if (data) {
  //     setQuizs(data?.sort(() => Math.random() - 0.5));
  //     console.log(quizs);
  //     setQuizImg(quizs[number].img);
  //     setQuizData([...quizs[number].wrongAnswer, quizs[number].answer].sort(() => Math.random() - 0.5));
  //     // console.log(quizs[0].answer);
  //   }
  // }, [number]);
  // useEffect(() => {
  //   if (isLoading === true) {
  //     return;
  //   }
  //   const quizs = data?.sort(() => Math.random() - 0.5);
  //   console.log(quizs);
  //   setQuizImg(quizs[number].img);
  //   setQuizData([...quizs[number].wrongAnswer, quizs[number].answer].sort(() => Math.random() - 0.5));
  //   console.log(quizs[0].answer);
  // }, [number]);

  if (isLoading) {
    return <p>로딩중입니다...</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다</p>;
  }

  // const quizs = [...data].sort(() => Math.random() - 0.5);
  // const quizImg = quizs[number - 1].img;
  // const quizData = [...quizs[number - 1].wrongAnswer, quizs[number - 1].answer].sort(() => Math.random() - 0.5);
  return (
    <StSection>
      <h2>⭐별자리 맞추기⭐</h2>
      <p>왼쪽 별자리를 보고 알맞은 별자리의 이름을 클릭하세요</p>
      {/* <p>{`Q ${number < 10 ? '0' + number : number}`}/5</p> */}
      {number === -1 ? (
        <div>
          main
          <StNextButton type="submit" onClick={clickNextBtnHandler}>
            next
          </StNextButton>
        </div>
      ) : (
        <div>
          <p>{`문제 ${number + 1}`}/5</p>
          <StQuizWrap>
            <StImg>
              <img src={quizImg} />
            </StImg>
            <StForm
              onSubmit={e => {
                e.preventDefault();
                clickNextBtnHandler();
              }}>
              {quizData?.map((item, i) => {
                return (
                  <div key={item + i}>
                    <input type="radio" id={item} name="checkAnswer" value={item} onChange={inputOnChangeHandler} />
                    {/* <input type="radio" id={item} name="checkAnswer" value={item} /> */}
                    <label htmlFor={item}>
                      {i + 1 + '. '}
                      {item}
                    </label>
                  </div>
                );
              })}
              <StNextButton type="submit">next</StNextButton>
            </StForm>
          </StQuizWrap>
        </div>
      )}
    </StSection>
  );
};

export default Quiz;
const StSection = styled.section`
  background-color: var(--color_black);
  color: var(--color_white);
  height: 100vh;
  padding: 60px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 30px;
  }
  & p {
    margin: 10px 0;
    text-align: center;
  }
`;

const StQuizWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  & img {
    width: 400px;
    height: 400px;
  }
`;
const StImg = styled.div``;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: left;
  font-size: 24px;
  margin-left: 240px;
  & div {
    margin: 30px 0;
    & input {
      opacity: 0;
    }
    & input[type='radio']:checked + label {
      border-bottom: 3px solid var(--color_purple);
      padding-bottom: 5px;
    }

    & label {
      cursor: pointer;
      &:hover {
        border-bottom: 3px solid var(--color_purple);
        padding-bottom: 5px;
      }
    }
  }
`;
const StNextButton = styled.button`
  background-image: url(${nextIcon});
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  text-indent: -9999px;
  position: absolute;
  top: 50%;
  right: 240px;
  transform: translate(-50%, 0px);
  cursor: pointer;
`;
