import React from 'react';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  MoveOut,
  Sticky,
  MoveIn,
  Zoom,
} from 'react-scroll-motion';
import './../style/Home.css';
import Constellation from '../componants/Constellation';
import Button from '../componants/Button';
import { Spin } from '../anima/Anima';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useNavigate } from 'react-router-dom';
import {
  StDescriptP,
  StH1,
  StImgBox,
  StParallaxBg,
  StParallaxBox,
  StParallaxImg,
  StText,
  StTextBox,
} from '../style/Home/HomeStyle';

const Height = '1050vh';
const Home = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg" style={{ height: Height }}>
        {/* 우주배경 */}
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

          <Button
            className="center"
            size="large"
            onClick={() => {
              navigate('/list');
            }}>
            더보기
          </Button>
        </ScrollContainer>
      </div>
    </>
  );
};

export default Home;
