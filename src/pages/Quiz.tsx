import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getQuiz } from '../api/quiz';
import { styled } from 'styled-components';
import nextIcon from '../images/quizNextIcon.svg';

const Quiz = () => {
  const { isLoading, isError, data } = useQuery<any>('quiz', getQuiz);
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
      {/* <p>{`Q ${number < 10 ? '0' + number : number}`}/5</p> */}
      <p>{`문제 ${number}`}/5</p>
      <StQuizWrap>
        <StImg>
          <img src={quizImg} />
        </StImg>
        <StForm
          onSubmit={e => {
            e.preventDefault();
            clickNextBtnHandler();
          }}>
          {quizData.map((item, i) => {
            return (
              <div key={item + i}>
                <input type="radio" id={item} name="checkAnswer" value={item} />
                <label htmlFor={item}>
                  {i + 1 + '. '}
                  {item}
                </label>
              </div>
              // <label htmlFor={item.id}>
              //   <input type="radio" id={item.id} name="checkAnswer" value={item} />
              //   {item}
              // </label>
            );
          })}
          <StNextButton type="submit">next</StNextButton>
        </StForm>
      </StQuizWrap>
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
`;

const StQuizWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  & img {
    width: 500px;
    height: 500px;
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
