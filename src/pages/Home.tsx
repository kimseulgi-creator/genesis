import React, { useEffect, useRef } from 'react';
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
  ZoomIn,
} from 'react-scroll-motion';
import './../style/Home.css';
import { keyframes, styled } from 'styled-components';
import Constellation from '../componants/Constellation';
import Button from '../componants/Button';
import { ShootingStar, Spin } from '../anima/Anima';
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax';

interface Props {}
// const Height = '655vh';
const Height = '1050vh';

const Home = (): JSX.Element => {
  // const parallax = useParallax<HTMLDivElement>({
  //   speed: -20,
  //   translateX: [0, 10],
  //   scale: [1.2, 1.2],
  // });

  return (
    <>
      <div className="bg" style={{ height: Height }}>
        {/* 우주배경 */}
        {/* <div className="spaceBg-box" ref={parallax.ref}>
          <StParallaxSpaceBg
            className="spaceBg"
            // src={`./images/parallax/black-and-white-galaxy-background_189483-82.jpg`}
            src="./images/parallax/mainBackground2.jpg"
            alt="패럴렉스 이미지"
          />
        </div> */}
        <ParallaxBanner layers={[{ image: './images/parallax/bg47.jpg', speed: -15 }]} className="aspect-[2/1]">
          <StParallaxBox className="parallaxBox">
            {/* 돌 들 */}
            <Parallax className="parallaxRock1" speed={0}>
              <StParallaxImg src={`./images/parallax/parallaxRock1.png`} alt="패럴렉스 이미지" />
            </Parallax>
            <Parallax className="parallaxRock2" speed={30}>
              <StParallaxImg src={`./images/parallax/parallaxRock2.png`} alt="패럴렉스 이미지" />
            </Parallax>
            <Parallax className="parallaxRock3" speed={15}>
              <StParallaxImg src={`./images/parallax/parallaxRock3.png`} alt="패럴렉스 이미지" />
            </Parallax>
            <Parallax className="parallaxRock4" speed={-10}>
              <StParallaxImg src={`./images/parallax/parallaxRock1.png`} alt="패럴렉스 이미지" />
            </Parallax>
            <Parallax className="parallaxRock5" speed={5}>
              <StParallaxImg src={`./images/parallax/parallaxRock3.png`} alt="패럴렉스 이미지" />
            </Parallax>
            <Parallax className="parallaxRock6" speed={13}>
              <StParallaxImg src={`./images/parallax/parallaxRock3.png`} alt="패럴렉스 이미지" />
            </Parallax>

            {/* 땅 */}
            <Parallax className="parallax-floor" speed={-20}>
              <StParallaxBg src={`./images/parallax/parallaxBg.png`} alt="패럴렉스 이미지" />
            </Parallax>
          </StParallaxBox>
        </ParallaxBanner>

        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade())}>
              <span hidden style={{ fontSize: 30 }}></span>
            </Animator>
          </ScrollPage>

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

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(50, 50), Move(0, -12, 0, -25))}>
              <StText>
                <h2>별자리란?</h2>
              </StText>
              <StImgBox>
                <img src="./imgs/게자리.png" alt="별자리" />
              </StImgBox>
            </Animator>
            {/* <Animator animation={batch(Sticky(0, 20), ShootingStar(2))}>
              <StAnimaShootingStar>
                <img src="./images/stars/shootingStar.png" alt="별똥별" />
              </StAnimaShootingStar>
            </Animator> */}
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Fade()}>
              <></>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(50, 50), Zoom(1.4, 1.2), Spin(1.8))}>
              <Constellation />
            </Animator>
            <Animator animation={batch(Fade(), Sticky(50, 50), Move(0, -12, 0, -25))}>
              <StTextBox>
                <p className="descriptionPara">밝은 별을 중심으로</p>
                <p className="descriptionPara">지구에서 보이는 모습에 따라</p>
                <p className="descriptionPara">어떤 사물을 연상하도록</p>
              </StTextBox>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={Fade()}>
              <></>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(50, 50), MoveIn(0, -12), MoveOut(0, -42))}>
              <StText>
                <p className="hash-Text"># 시대별</p>
                <p className="hash-Text"># 문화권별</p>
                <p className="hash-Text"># 88개</p>
              </StText>
            </Animator>
          </ScrollPage>

          <Button className="center" size="large">
            더보기
          </Button>
        </ScrollContainer>
        {/* 페럴렉스 */}
      </div>
    </>
  );
};

export default Home;
const imgAnima = keyframes`
0% {
  transform: rotate(0) scale(0.6) scaleX(-1);
}
25%{
  transform: rotate(12deg) scale(0.6) scaleX(-1);
}
50% {
  transform: rotate(0) scale(0.6) scaleX(-1);
}
75%{
  transform: rotate(12deg) scale(0.6) scaleX(-1);
}
100% {
  transform: rotate(0) scale(0.6) scaleX(-1);
}
`;

const StParallaxBox = styled.div`
  position: relative;
  height: 100vh;
`;
const StParallaxBg = styled.img`
  width: 100%;
  transform: scale(1.05);
`;
const StParallaxSpaceBg = styled.img`
  /* transform: translateY(-20%); */
`;
const StParallaxImg = styled.img``;
const StAnimaShootingStar = styled.div`
  transform: translateX(80vw) scale(0.4) rotate(90deg);
  transform-origin: 0 0;
`;
const StImgBox = styled.div`
  position: fixed;
  top: -6vw;
  left: -8vw;
  transform: rotate(30deg);
`;
const StH1 = styled.div`
  font-family: 'Ysabeau SC', sans-serif;
  letter-spacing: -2px;
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
const StTextBox = styled.div`
  color: #fff;
  font-weight: bold;
  width: 70vw;
  font-size: 4vw;
  position: relative;
  & .descriptionPara {
    position: fixed;
    &:nth-child(1) {
      top: -15vw;
    }
    &:nth-child(2) {
      top: 0;
      left: 5vw;
    }
    &:nth-child(3) {
      top: 15vw;
      right: 0;
    }
  }
`;
const StText = styled.section`
  color: #fff;
  position: relative;
  & .hash-Text {
    width: 60vw;
    position: fixed;
    font-weight: bold;
    &:nth-child(1) {
      font-size: 13vw;
      top: -25vw;
      left: -10vw;
    }
    &:nth-child(2) {
      font-size: 9vw;
      top: 0vw;
      left: -35vw;
    }
    &:nth-child(3) {
      top: 20vw;
      font-size: 6vw;
    }
  }
  & .ConstellImg {
    position: fixed;
    top: -13vw;
    left: -15vw;
    width: 60%;
    transform: scale(0.6) scaleX(-1);
    animation: ${imgAnima} 8s infinite linear;
  }
  & h2 {
    font-size: 6vw;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  & dl {
    box-sizing: border-box;
    padding-left: 0.5rem;
    & dt {
      margin-bottom: 1rem;
      font-size: 3vw;
      font-weight: bold;
    }
    & dd {
      font-size: 2vw;
      margin-bottom: 2rem;
    }
    .dldf {
      display: flex;
      & .period {
        margin-right: 10vw;
      }
    }
  }
`;
