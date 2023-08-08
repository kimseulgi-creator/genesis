import React from 'react';
import { Card, CardContainer, CardWrapper, CharacterImage, CoverImage, Wrapper, WrapperInner } from './Constellation';
import { postData } from './Type';
import spring from '../../img/봄.png';
import { styled } from 'styled-components';

const Spring = ({ id, data }: any) => {
  return (
    <>
      <Wrapper id={id}>
        <Stimg src={spring} />
      </Wrapper>
      <Wrapper>
        <CardContainer>
          {data
            .filter((item: postData) => item.season === '봄')
            .map((item: postData) => (
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

export default Spring;

export const Stimg = styled.img`
  margin: 15px;
  max-height: 300px;
`;
