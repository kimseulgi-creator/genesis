import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TourseStar from '../../img/TourseStar.png';

const Constellation = () => {
  const [data, setData] = useState<any>([]);
  const FetchData = async () => {
    try {
      const dbData = await axios.get(`http://localhost:4000/posts`);
      setData(dbData.data);
      console.log(dbData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <Wrapper>
        <CardWrapper>
          <a href="https://www.mythrillfiction.com/the-dark-rider" target="_blank">
            <Card>
              <WrapperInner>
                <CoverImage src={TourseStar} />
              </WrapperInner>
              <TitleImage src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" />
              <CharacterImage src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" />
            </Card>
          </a>
        </CardWrapper>
      </Wrapper>
      <Wrapper>
        <CardContainer>
          {data.map((item: any) => (
            <CardWrapper>
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

const Wrapper = styled.div`
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: calc(300px / 1.5);
  height: 300px;
  margin: 0 50px;
`;

const WrapperInner = styled.div`
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

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleImage = styled.img`
  width: 100%;
  transition: transform 0.5s;
`;

const CharacterImage = styled.img`
  width: 100%;
  min-width: 200px;
  max-height: 350px;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
`;

const Card = styled.div`
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
