import React from 'react';
import Button from '../Button';
import { result } from '../../QuizResultData/Result';
import { StKakaoButton, StQuizResult, StResultButtonWrap } from '../../style/quiz/ResultStyle';
import { useNavigate } from 'react-router-dom';

interface QuizResultProps {
  score: number;
}

function QuizResult({ score }: QuizResultProps) {
  const navigate = useNavigate();

  // 카카오톡 공유하기
  const shareKakao = () => {
    window.Kakao.Link.sendCustom({
      templateId: 97221,
    });
  };

  return (
    <StQuizResult>
      <h2>⭐퀴즈 결과⭐</h2>
      <p>총 5문제 중 {score}문제 맞추셨습니다!</p>
      <p>{result[score].title}</p>
      <pre>{result[score].contents}</pre>
      <img src={`../images/result/result${score + 1}.jpg`} alt="퀴즈 결과 이미지" />
      <StResultButtonWrap>
        <Button size="medium" onClick={() => window.location.reload()}>
          다시하기
        </Button>
        <Button size="medium" onClick={() => navigate('/list')}>
          별자리 보러가기
        </Button>
        <StKakaoButton onClick={shareKakao}>
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            alt="카카오링크 보내기 버튼"
          />
        </StKakaoButton>
      </StResultButtonWrap>
    </StQuizResult>
  );
}

export default QuizResult;
