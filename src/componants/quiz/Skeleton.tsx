import React from 'react';
import { styled } from 'styled-components';

function Skeleton() {
  return <StSkeleton></StSkeleton>;
}

export default Skeleton;
const StSkeleton = styled.div`
  width: 100%;
  height: inherit;
  background: linear-gradient(90deg, #b8adff, #9585ff, #6d55ff, #4e33ff);
  background-size: 400% 100%;
  animation-name: skeletonImgAnima;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes skeletonImgAnima {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
