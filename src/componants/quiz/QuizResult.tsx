import React from 'react';
import Button from '../Button';
import { result } from '../../resultData/Result';
import { StQuizResult, StResultButtonWrap } from '../../style/quiz/ResultStyle';
import { useNavigate } from 'react-router-dom';

interface QuizResultProps {
  score: number;
}

function QuizResult({ score }: QuizResultProps) {
  const navigate = useNavigate();
  return (
    <StQuizResult>
      <h2>⭐퀴즈 결과⭐</h2>
      <p>총 5문제 중 {score}문제 맞추셨습니다!</p>
      <p>{result[score].title}</p>
      <pre>{result[score].contents}</pre>
      <img src={`../images/result/result${score + 1}.jpg`} />
      <StResultButtonWrap>
        <Button size="medium" onClick={() => window.location.reload()}>
          다시하기
        </Button>
        <Button size="medium" onClick={() => navigate('/')}>
          메인페이지 이동
        </Button>
      </StResultButtonWrap>
    </StQuizResult>
  );
}

export default QuizResult;
