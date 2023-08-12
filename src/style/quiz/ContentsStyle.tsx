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
    }
  }
`;

export const StQuizWrap = styled.div`
  text-align: center;

  & img {
    width: 300px;
    height: 300px;
    margin: 80px;
  }
`;

export const StForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  & div {
    & input {
      opacity: 0;
    }
    & input[type='radio']:checked + label:after {
      transform: scaleX(1);
      /* border-bottom: 3px solid var(--color_purple);
      padding-bottom: 5px; */
    }

    & label {
      cursor: pointer;
      margin: 0px 30px;
      display: inline-block;

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
        /* width: 100px; */
      }
    }
  }
  & .prevBtn {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 250px;
    transform: scaleX(-1) translate(-50%, 0px);
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
  height: 100vh;
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
