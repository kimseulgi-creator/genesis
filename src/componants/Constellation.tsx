import React, { useEffect, useState } from 'react';
import { keyframes, css, styled } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const svgListData: string[] = [
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

const Constellation = (): JSX.Element => {
  const { ref, inView } = useInView();
  const [scrollY, setScrollY] = useState<number>(0);

  const scrollhandle = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => scrollhandle);

    return () => {
      window.removeEventListener('scroll', scrollhandle);
    };
  }, []);

  return (
    <>
      <StConstellContainer ref={ref}>
        <StConstellBox>
          {svgListData.map((el, index) => {
            return <StConstellImg key={el + index} src={`./images/stars/${el}`} alt="별자리 이미지" />;
          })}
        </StConstellBox>
      </StConstellContainer>
    </>
  );
};

export default React.memo(Constellation);
//
// 0810// // // // // // //
// 이부분부터 진행해야함
//
//
const onRotateCircle = keyframes`
  0%{
    transform : scale(1.7)  rotate(30deg)
  }
  100%{
    transform : scale(1.7)  rotate(395deg)
  }
`;
const onRotateCircleKeyframes = keyframes`
  0% {
    transform: translate(150%, -50%) scale(1.7)  rotate(30deg);
  }
  100% {
    transform: translate(50%, -50%) scale(1.7);
  }
`;

const offRotateCircleKeyframes = keyframes`
  0% {
    visibility: visible;
    transform: translate(50%, -50%) scale(1.7);
  }
  100% {
    visibility: visible;
    transform: translate(150%, -50%) scale(1.7)  rotate(30deg);
  }
`;

const StConstellContainer = styled.div`
  transform: scale(1.7);
`;
const StConstellBox = styled.div`
  box-sizing: border;
  /* position: fixed; */
  /* top: 50%; */
  right: 0;
  /* transform: translate(50%, -50%) scale(1.7); */
  width: 60vw;
  height: 60vw;
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
