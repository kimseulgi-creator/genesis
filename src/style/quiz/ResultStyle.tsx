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
  }
  & p {
    &:nth-child(3) {
      margin-top: 60px;
      margin-bottom: 30px;
      font-size: 24px;
      font-family: 'RixTodaytoonB';
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
    margin: 60px 0;
  }
`;
export const StResultButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  & button:nth-child(2) {
    margin-left: 30px;
  }
`;
