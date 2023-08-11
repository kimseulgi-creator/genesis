import React, { useEffect } from 'react';
import styled from 'styled-components';
import BackGroundImg from '../img/spaceBackground.png';
import { setUpKeyboardListener, update } from '../componants/Game/KeyCode';
import { render } from '../componants/Game/Render';
import { createEnemy, gameOver } from '../componants/Game/Enemy';
import { wrapperHeight, wrraperWidth } from '../componants/Game/Canvas';
import { handleClick } from '../componants/Game/handleClick';
import gameover from '../img/gameover.png';
import stageclearimg from '../img/gameClear.png';
import { gameClear } from '../componants/Game/Bullet';
const Game: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const keysDown: { [key: number]: boolean } = {};

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.addEventListener('click', handleClick);
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setUpKeyboardListener();
        createEnemy();

        const main = () => {
          const gameOverImg = new Image();
          gameOverImg.src = gameover;
          const gameClearImg = new Image();
          gameClearImg.src = stageclearimg;
          if (!gameOver && !gameClear) {
            update();
            render(ctx);
            requestAnimationFrame(main);
          } else if (gameOver) {
            const imgWidth = 800;
            const imgHeight = 800;
            const imgX = wrraperWidth / 2 - imgWidth / 2; // 이미지의 중앙 x좌표
            const imgY = wrapperHeight / 2 - imgHeight / 2; // 이미지의 중앙 y좌표
            ctx?.drawImage(gameOverImg, imgX, imgY, imgWidth, imgHeight);
          } else {
            const imgWidth = 800;
            const imgHeight = 800;
            const imgX = wrraperWidth / 2 - imgWidth / 2; // 이미지의 중앙 x좌표
            const imgY = wrapperHeight / 2 - imgHeight / 2; // 이미지의 중앙 y좌표
            ctx?.drawImage(gameClearImg, imgX, imgY, imgWidth, imgHeight);
          }
        };
        main();
      }
    }
  }, []);

  return (
    <StGameWrapper>
      <canvas ref={canvasRef}></canvas>
    </StGameWrapper>
  );
};

export default Game;

const StGameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${BackGroundImg});
  background-size: cover;
  background-position: center;
  z-index: 31;
`;
