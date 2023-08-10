import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import zodiac from '../../img/탄생좌.png';

import type { postData } from './Type';

const Constellation = ({ data }: any) => {
  if (!data) {
    return null;
  }
  const response = data.filter((item: postData) => item.birthday === 'constellation');
  return (
    <>
      <Stdivs>
        <Wrapper>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
            <img src={zodiac} />
          </motion.div>
        </Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
          <StClockWrapper>
            {response.map((item: postData, index: number) => (
              <ClockNumber key={index} rotation={index * 30}>
                <CardWrapper key={item.title}>
                  <Card>
                    <WrapperInner>
                      <CoverImage src={item.starImg} />
                    </WrapperInner>
                    <CharacterImage src={item.img} />
                  </Card>
                </CardWrapper>
              </ClockNumber>
            ))}
          </StClockWrapper>
        </motion.div>
      </Stdivs>
    </>
  );
};
export default Constellation;

interface ClockHour {
  rotation: number;
}
const Stdiv = styled.div`
  background-color: #000;
  position: relative;
  z-index: 29;
  height: 5vh;
`;
const Stdivs = styled.div`
  background-color: #000;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StClockWrapper = styled.div`
  height: 1000px;
  border: 0px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 60s linear infinite;
`;

const ClockNumber = styled.div<ClockHour>`
  position: absolute;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  transform: rotate(${({ rotation }) => rotation}deg) translateX(88%) translateY(88%);
  transform-origin: center center;
`;

export const Wrapper = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: calc(300px / 1.5);
  height: 300px;
  margin: 0 50px;
`;

export const WrapperInner = styled.div`
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  z-index: -1;

  &::before,
  &::after {
    content: '';
    opacity: 0;
    width: 100%;
    height: 80px;
    transition: all 0.5s;
    position: absolute;
    left: 0;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  &:hover::after {
    height: 120px;
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleImage = styled.img`
  width: 100%;
  transition: transform 0.5s;
`;

export const CharacterImage = styled.img`
  width: 100%;
  min-width: 200px;
  max-height: 350px;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 30px;
  perspective: 2500px;

  &:hover ${WrapperInner} {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    /* box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75); */
  }

  &:hover ${TitleImage} {
    transform: translate3d(0%, -50px, 100px);
  }

  &:hover ${CharacterImage} {
    opacity: 1;
    transform: translate3d(0%, -30%, 100px);
  }
`;
