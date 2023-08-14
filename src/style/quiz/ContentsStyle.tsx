import { styled } from 'styled-components';

export const StQuizContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 24px;
    &:nth-child(2) {
      margin-top: 20px;
      font-size: 18px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const StQuizWrap = styled.div`
  text-align: center;

  & img {
    width: 300px;
    height: 300px;
    margin: 4vw;
    @media screen and (max-width: 768px) {
      width: 200px;
      height: 200px;
      margin: 7vw;
    }
    @media screen and (max-width: 590px) {
      width: 100px;
      height: 100px;
      margin: 7vw;
    }
  }
`;

export const StForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  @media screen and (max-width: 980px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  & div {
    & input {
      opacity: 0;
    }
    & input[type='radio']:checked + label:after {
      transform: scaleX(1);
    }

    & label {
      cursor: pointer;
      margin: 0px 2vw;
      display: inline-block;
      @media screen and (max-width: 768px) {
        margin: 2vw 0px;
      }
      &:after {
        display: block;
        content: '';
        margin-top: 10px;
        border-bottom: 5px solid var(--color_purple);
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
        opacity: 70%;
      }
      &:hover:after {
        transform: scaleX(1);
      }
    }
  }
  & .prevBtn {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 13vw;
    transform: scaleX(-1) translate(-50%, 0px);
    @media screen and (max-width: 980px) {
      left: 3vw;
    }
  }
`;
export const StQuizImgWrap = styled.div`
  position: relative;
`;
export const StHintButtonWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  -webkit-backdrop-filter: blur(1.5px);
  -mos-backdrop-filter: blur(1.5px);
  -ms-backdrop-filter: blur(1.5px);
  -o-backdrop-filter: blur(1.5px);
  backdrop-filter: blur(1.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.2s ease;
  &:hover {
    opacity: 100%;
  }
`;
export const StHintWrap = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 68.59px);
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(2px);
  -mos-backdrop-filter: blur(2px);
  -ms-backdrop-filter: blur(2px);
  -o-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  z-index: 5;
`;
export const StHintContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: var(--color_black);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & pre {
    line-height: 2;
    margin-bottom: 30px;
    font-size: 18px;
  }
`;
