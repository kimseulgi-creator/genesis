import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getQuiz } from '../api/quiz';
import { styled } from 'styled-components';

const Quiz = () => {
  const { isLoading, isError, data } = useQuery('quiz', getQuiz);
  const [number, setNumber] = useState<number>(1);
  const clickNextBtnHandler = () => {
    setNumber(number + 1);
  };

  if (isLoading) {
    return <p>로딩중입니다...</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다</p>;
  }
  const quizs = [...data].sort(() => Math.random() - 0.5);
  const quizImg = quizs[number - 1].img;
  const quizData = [...quizs[number - 1].wrongAnswer, quizs[number - 1].answer].sort(() => Math.random() - 0.5);
  return (
    <StSection>
      <h2>별자리맞추기</h2>
      <p>{`Q${number < 10 ? '0' + number : number}`}</p>
      <div>
        <img src={quizImg} />
        <StOl>
          {quizData.map(item => {
            return <li key={item.id}>{item}</li>;
          })}
        </StOl>
      </div>
      <button onClick={clickNextBtnHandler}>next</button>
    </StSection>
  );
};

export default Quiz;
const StSection = styled.section`
  background-color: var(--color_black);
  color: var(--color_white);
`;
const StOl = styled.ol`
  list-style: circle;
`;
