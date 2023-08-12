import { styled } from 'styled-components';
import quizBG from '../../images/quiz/quiz_background2.png';

export const StSection = styled.section`
  background: url(${quizBG});
  color: var(--color_white);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const StQuizMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const StTitle = styled.div`
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
export const StStarImg = styled.img`
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
export const StHillImgWrap = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 100vh;
`;
export const StHillImg = styled.img`
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
export const StNextButtonWrap = styled.div`
  text-align: center;
  position: absolute;
  top: calc(50% - 34px);
  transform: translate(-50%, 0px);
  animation: moveBtn 0.8s forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  z-index: 2;

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
