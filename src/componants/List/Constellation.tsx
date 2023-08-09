import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import zodiac from '../../img/탄생좌.png';
import { postData } from './Type';

const Constellation = ({ id, data }: any) => {
  if (!data) {
    return null;
  }
  const response = data.filter((item: postData) => item.birthday === 'constellation');
  return (
    <>
      <Wrapper id={id}>
        <img src={zodiac} />
      </Wrapper>
      <Wrapper>
        <CardContainer>
          {response &&
            response.map((item: postData) => (
              <CardWrapper key={item.title}>
                <Card>
                  <WrapperInner>
                    <CoverImage src={item.starImg} />
                  </WrapperInner>
                  <CharacterImage src={item.img} />
                </Card>
              </CardWrapper>
            ))}
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default Constellation;

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

  &::before {
    top: 0;
    height: 100%;
    background-image: linear-gradient(to top, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%);
  }

  &::after {
    bottom: 0;
    opacity: 1;
    background-image: linear-gradient(to bottom, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%);
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
  padding: 0 36px;
  perspective: 2500px;

  &:hover ${WrapperInner} {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  }

  &:hover ${TitleImage} {
    transform: translate3d(0%, -50px, 100px);
  }

  &:hover ${CharacterImage} {
    opacity: 1;
    transform: translate3d(0%, -30%, 100px);
  }
`;
