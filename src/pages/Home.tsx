import React, { useRef } from 'react';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  MoveOut,
  Sticky,
  FadeIn,
  MoveIn,
  Zoom,
} from 'react-scroll-motion';
import './../style/Home.css';
import { styled } from 'styled-components';
import Constellation from '../componants/Constellation';
import Button from '../componants/Button';
import { Spin } from '../anima/Anima';

interface Props {}
const Height = '655vh';
const Home = (): JSX.Element => {
  return (
    <>
      <div className="bg" style={{ height: Height, paddingTop: '100vh' }}>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade())}>
              <span hidden style={{ fontSize: 30 }}></span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <StH1>Genesis</StH1>
              <StDescriptP>Let's Find Out About Constellations</StDescriptP>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade())}>
              <></>
            </Animator>
          </ScrollPage>

          {/* <Constellation /> */}
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(50, 50), Zoom(1.4, 1.2), Spin(1))}>
              <Constellation />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 50), Move(0, -12, 0, -25))}>
              <StText>
                <h2>말발굽 돼지뼈자리</h2>
                <p>설명</p>
              </StText>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Fade()}>
              <></>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(50, 50), Zoom(1.4, 1.2), Spin(1))}>
              <Constellation />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 50), Move(0, -12, 0, -25))}>
              <StText>
                <h2>말발굽 돼지뼈자리</h2>
                <p>설명</p>
              </StText>
            </Animator>
          </ScrollPage>

          <Button className="center" size="large">
            더보기
          </Button>
        </ScrollContainer>
      </div>
    </>
  );
};

export default Home;
const StH1 = styled.div`
  text-align: center;
  font-size: 8vw;
  color: #fff;
`;
const StDescriptP = styled.div`
  text-align: center;
  margin-top: 1vh;
  font-size: 2vw;
  color: #fff;
`;
const StText = styled.div`
  color: #fff;
  transform: translateY(-200%);
  & h2 {
    font-size: 5vw;
    margin-bottom: 1rem;
  }
  & p {
    font-size: 2vw;
  }
`;
