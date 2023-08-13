import { styled } from 'styled-components';

export const StQuizResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 30px;
    @media screen and (max-width: 980px) {
      font-size: 24px;
    }
  }
  & p {
    &:nth-child(3) {
      margin-top: 3vw;
      margin-bottom: 2vw;
      font-size: 24px;
      font-family: 'RixTodaytoonB';
      @media screen and (max-width: 980px) {
        font-size: 18px;
      }
    }
    &:nth-child(4) {
      text-align: center;
    }
  }
  & pre {
    text-align: center;
    line-height: 1.3;
  }
  & img {
    width: 400px;
    margin: 3vw 0;
  }
`;
export const StResultButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & button:nth-child(2) {
    margin: 30px;
  }
`;

export const StKakaoButton = styled.button`
  background: transparent;
  border: none;
  width: 3rem;
  padding: 0;
  cursor: pointer;
  & img {
    width: 100%;
    margin: 0;
  }
`;
