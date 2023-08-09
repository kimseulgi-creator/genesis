import React, { useRef } from 'react';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import './../style/Home.css';
import { styled } from 'styled-components';
import { Animation } from '../scroll-motion';
import Constellation from '../componants/Constellation';
import { SpinCircle } from '../anima/Anima';

interface Props {}
const Height = '999vh';
const Home = ({}: Props): JSX.Element => {
  // console.log(inView);
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
            {/* <Animator style={{ marginTop: '45px' }} animation={batch(Fade(), Sticky(), Move(0, 0, 0, -200))}></Animator> */}
            <ScrollPage>
              <Animator animation={Fade()}>
                <></>
              </Animator>
            </ScrollPage>
          </ScrollPage>

          <Constellation />
          <ScrollPage>
            {/* <Animator animation={batch(Sticky(95, 50), Fade())}>
            </Animator> */}
            <Animator animation={batch(Fade(), Sticky(30, 50), Move(0, -25, 0, -50))}>
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
            <Animator animation={batch(Fade(), Sticky(30, 50), Move(0, -25, 0, -50))}>
              <StText>
                <h2>말발굽 돼지뼈자리</h2>
                <p>설명</p>
              </StText>
            </Animator>
          </ScrollPage>
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
