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

interface Props {}
interface Abc {
  name: string;
  age: number;
}

const Height = '500vh';
const Spin = (cycle: number) =>
  ({
    in: {
      style: {
        transform: `rotate(${cycle})`,
      },
    },
    out: {
      style: {
        opacity: value => 1 - value,
      },
    },
  } as Animation);
const Home = ({}: Props): JSX.Element => {
  return (
    <>
      <>
        <div className="bg" style={{ height: Height, paddingTop: '2000vh' }}>
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(Sticky(), Fade())}>
                <span hidden style={{ fontSize: 30 }}>
                  Let me show you scroll animation 😀
                </span>
              </Animator>
            </ScrollPage>
            <ScrollPage>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <h1 style={{ fontSize: 50 }}>Genesis</h1>
              </Animator>
              <Animator style={{ marginTop: '45px' }} animation={batch(Fade(), Sticky(), Move(0, 0, 0, -200))}>
                <p>Let's Find Out About Constellations</p>
              </Animator>
            </ScrollPage>

            <ScrollPage>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <></>
              </Animator>
            </ScrollPage>

            <ScrollPage>
              <Animator
                className="opac"
                style={{ opacity: '1 !important' }}
                animation={batch(Fade(1, 0), Sticky(100, 50), Spin(2))}>
                <Constellation />
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </div>
      </>
    </>
  );
};

export default Home;

const StTextH1 = styled.h1`
  font-size: 64px;
`;
