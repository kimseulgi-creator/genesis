import { keyframes, styled } from 'styled-components';

const imgAnima = keyframes`
0% {
  transform: rotate(0) scale(0.6) scaleX(-1);
}
25%{
  transform: rotate(12deg) scale(0.6) scaleX(-1);
}
50% {
  transform: rotate(0) scale(0.6) scaleX(-1);
}
75%{
  transform: rotate(12deg) scale(0.6) scaleX(-1);
}
100% {
  transform: rotate(0) scale(0.6) scaleX(-1);
}
`;

const StParallaxBox = styled.div`
  position: relative;
  height: 100vh;
`;
const StParallaxBg = styled.img`
  width: 100%;
  transform: scale(1.05) translateY(40%);
`;
const StParallaxImg = styled.img``;

const StImgBox = styled.div`
  position: fixed;
  top: -6vw;
  left: -8vw;
  transform: rotate(30deg);
`;
const StH1 = styled.div`
  font-family: 'Ysabeau SC', sans-serif;
  letter-spacing: -2px;
  text-align: center;
  font-size: 8vw;
  color: #fff;
`;
const StDescriptP = styled.div`
  text-align: center;
  margin-top: 1vh;
  font-size: 2vw;
  color: #fff;
`;
const StTextBox = styled.div`
  color: #fff;
  font-weight: bold;
  width: 70vw;
  font-size: 4vw;
  position: relative;
  & .descriptionPara {
    position: fixed;
    &:nth-child(1) {
      top: -15vw;
    }
    &:nth-child(2) {
      top: 0;
      left: 5vw;
    }
    &:nth-child(3) {
      top: 15vw;
      right: 0;
    }
  }
`;
const StText = styled.section`
  color: #fff;
  position: relative;
  & .hash-Text {
    width: 60vw;
    position: fixed;
    font-weight: bold;
    &:nth-child(1) {
      font-size: 13vw;
      top: -20vw;
      left: -10vw;
    }
    &:nth-child(2) {
      font-size: 9vw;
      top: 0vw;
      left: -35vw;
    }
    &:nth-child(3) {
      top: 16vw;
      font-size: 6vw;
    }
  }
  & .ConstellImg {
    position: fixed;
    top: -13vw;
    left: -15vw;
    width: 60%;
    transform: scale(0.6) scaleX(-1);
    animation: ${imgAnima} 8s infinite linear;
  }
  & h2 {
    font-size: 6vw;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  & dl {
    box-sizing: border-box;
    padding-left: 0.5rem;
    & dt {
      margin-bottom: 1rem;
      font-size: 3vw;
      font-weight: bold;
    }
    & dd {
      font-size: 2vw;
      margin-bottom: 2rem;
    }
    .dldf {
      display: flex;
      & .period {
        margin-right: 10vw;
      }
    }
  }
`;

export { imgAnima, StParallaxBox, StParallaxBg, StParallaxImg, StImgBox, StH1, StDescriptP, StTextBox, StText };
