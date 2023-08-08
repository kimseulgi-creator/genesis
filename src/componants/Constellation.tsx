import React from 'react';
import { styled } from 'styled-components';
interface Props {}
const data: string[] = [
  'aquarius.svg',
  'aries.svg',
  'cancer.svg',
  'capricorn.svg',
  'gemini.svg',
  'leo.svg',
  'libra.svg',
  'pisces.svg',
  'sagittarius.svg',
  'scorpio.svg',
  'taurus.svg',
  'virgo.svg',
];

const Constellation = ({}: Props): JSX.Element => {
  return (
    <>
      <StConstellContainer>
        <StConstellBox>
          {data.map((el, index) => {
            return <StConstellImg key={el + index} src={`./stars/${el}`} alt="별자리 이미지" />;
          })}
        </StConstellBox>
      </StConstellContainer>
    </>
  );
};

export default Constellation;
const StConstellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StConstellBox = styled.div`
  box-sizing: border;
  position: relative;
  background-color: red;
  width: 60vw;
  height: 60vw;

  border: 5px solid #000;

  border-radius: 100%;
`;
const StConstellImg = styled.img`
  width: 6vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;

  &:nth-child(1) {
    transform: rotate(30.4166666667deg) translateY(20vw);
  }
  &:nth-child(2) {
    transform: rotate(60.8333333333deg) translateY(20vw);
  }
  &:nth-child(3) {
    transform: rotate(91.25deg) translateY(20vw);
  }
  &:nth-child(4) {
    transform: rotate(121.666666667deg) translateY(20vw);
  }
  &:nth-child(5) {
    transform: rotate(152.083333333deg) translateY(20vw);
  }
  &:nth-child(6) {
    transform: rotate(182.5deg) translateY(20vw);
  }
  &:nth-child(7) {
    transform: rotate(212.916666667deg) translateY(20vw);
  }
  &:nth-child(8) {
    transform: rotate(243.333333333deg) translateY(20vw);
  }
  &:nth-child(9) {
    transform: rotate(273.75deg) translateY(20vw);
  }
  &:nth-child(10) {
    transform: rotate(304.166666667deg) translateY(20vw);
  }
  &:nth-child(11) {
    transform: rotate(334.583333333deg) translateY(20vw);
  }
  &:nth-child(12) {
    transform: rotate(365deg) translateY(20vw);
  }
`;
