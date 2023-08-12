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
